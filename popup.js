import {
  echoSetToCharacters,
  getSortedSetNames,
  renderCharacters,
  renderSetList,
  renderSetDescription,
  setActiveSet,
  setSelectedSetIcon,
} from "./app-core.js";

const extensionStorage = {
  setSelectedEchoSet(setName) {
    return new Promise((resolve) => {
      chrome.storage.local.set({ selectedEchoSet: setName }, resolve);
    });
  },
  getSelectedEchoSet() {
    return new Promise((resolve) => {
      chrome.storage.local.get(["selectedEchoSet"], (result) => {
        resolve(result.selectedEchoSet || null);
      });
    });
  },
};

const dropdown = document.getElementById("echoDropdown");
const dropdownButton = document.getElementById("echoDropdownButton");
const selectedSetIcon = document.getElementById("selectedSetIcon");
const selectedSetName = document.getElementById("selectedSetName");
const setList = document.getElementById("echoSetList");
const characterElements = {
  section: document.getElementById("charactersSection"),
  grid: document.querySelector(".characters-grid"),
  recommendedList: document.getElementById("charactersRecommended"),
  alternativeList: document.getElementById("charactersAlternative"),
};
const descriptionElements = {
  section: document.getElementById("setDescription"),
  primaryLabel: document.getElementById("setEffectPrimaryLabel"),
  primaryText: document.getElementById("setEffectPrimaryText"),
  secondaryWrapper: document.getElementById("setEffectSecondary"),
  secondaryLabel: document.getElementById("setEffectSecondaryLabel"),
  secondaryText: document.getElementById("setEffectSecondaryText"),
};

function toggleDropdown(open) {
  const shouldOpen = typeof open === "boolean" ? open : setList.hidden;
  setList.hidden = !shouldOpen;
  dropdownButton.setAttribute("aria-expanded", String(shouldOpen));
}

async function selectSet(setName) {
  renderSetDescription(descriptionElements, setName);
  renderCharacters(characterElements, setName);
  setActiveSet(setList, setName);
  setSelectedSetIcon(selectedSetIcon, selectedSetName, setName);
  await extensionStorage.setSelectedEchoSet(setName);
  toggleDropdown(false);
}

async function initPopup() {
  const setNames = getSortedSetNames();
  renderSetList(setList, setNames, selectSet);

  dropdownButton.addEventListener("click", () => toggleDropdown());

  document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) {
      toggleDropdown(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      toggleDropdown(false);
    }
  });

  const savedSet = await extensionStorage.getSelectedEchoSet();
  if (savedSet && echoSetToCharacters[savedSet]) {
    await selectSet(savedSet);
    return;
  }

  if (setNames.length > 0 && echoSetToCharacters[setNames[0]]) {
    await selectSet(setNames[0]);
  }
}

void initPopup();
