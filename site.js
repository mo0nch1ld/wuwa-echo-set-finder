import {
  echoSetToCharacters,
  getSortedSetNames,
  renderCharacters,
  renderSetList,
  renderSetDescription,
  setActiveSet,
} from "./app-core.js";

const siteStorage = {
  setSelectedEchoSet(setName) {
    window.localStorage.setItem("selectedEchoSet", setName);
    return Promise.resolve();
  },
  getSelectedEchoSet() {
    return Promise.resolve(window.localStorage.getItem("selectedEchoSet"));
  },
};

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

async function selectSet(setName) {
  renderSetDescription(descriptionElements, setName);
  renderCharacters(characterElements, setName);
  setActiveSet(setList, setName);
  await siteStorage.setSelectedEchoSet(setName);
}

async function initSite() {
  const setNames = getSortedSetNames();
  renderSetList(setList, setNames, selectSet);

  const savedSet = await siteStorage.getSelectedEchoSet();
  if (savedSet && echoSetToCharacters[savedSet]) {
    await selectSet(savedSet);
    return;
  }

  if (setNames.length > 0 && echoSetToCharacters[setNames[0]]) {
    await selectSet(setNames[0]);
  }
}

void initSite();
