const echoSetToCharacters = {
  "Havoc Eclipse": ["Cantarella","Camellya", "Havoc Rover","Danjin"],
  "Trailblazing Star": ["Aemeath"],
  "Tidebreaking Courage": ["Brant"],
  "Eternal Radiance": ["Phoebe","Spectro Rover","Zani"],
  "Moonlit Clouds": ["Roccia","Zhezhi","Jianxin", "Yangyang","Sanhua","Taoqi","Mortefi"],
  "Frosty Resolve": ["Carlotta"],
  "Rejuvenating Glow": ["Shorekeeper","Aero Rover","Verina","Youhu","Baizhi","Buling"],
  "Void Thunder": ["Xiangli Yao","Calcharo","Lumi"],
  "Celestial Light": ["Jinhsi"],
  "Molten Rift": ["Changli","Encore","Chixia"],
  "Sierra Gale": ["Jiyan","Aalto"],
  "Empyrean Anthem": ["Yinlin","Yuanwu"],
  "Freezing Frost": ["Lingyang"],
  "Gusts of Welkin": ["Ciaccona"],
  "Windward Pilgrimage": ["Cartethyia"],
  "Flaming Clawprint": ["Lupa"],
  "Dream of the Lost": ["Phrolova"],
  "Crown of Valor": ["Augusta","Iuno"],
  "Flamewing's Shadow": ["Galbrena"],
  "Law of Harmony": ["Qiuyuan"],
  "Thread of Severed Fate": ["Chisa"],
  "Pact of Neonlight Leap": ["Lynae"],
  "Halo of Starry Radiance": ["Mornye"],
};

const dropdown = document.getElementById("echoDropdown");
const dropdownButton = document.getElementById("echoDropdownButton");
const selectedSetIcon = document.getElementById("selectedSetIcon");
const selectedSetName = document.getElementById("selectedSetName");
const setList = document.getElementById("echoSetList");
const charactersList = document.getElementById("characters");
const hasChromeStorage = typeof chrome !== "undefined" && chrome.storage && chrome.storage.local;

function getSetSlug(setName) {
  return setName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function getSetIconCandidates(setName) {
  const slug = getSetSlug(setName);
  return [
    `assets/echo-set-icons/${slug}.webp`,
    `assets/echo-set-icons/${slug}.png`,
  ];
}

function getCharacterSlug(characterName) {
  return characterName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function getCharacterIconCandidates(characterName) {
  let slug = getCharacterSlug(characterName);

  if (characterName.includes("Rover")) {
    slug = "rover";
  }

  return [
    `assets/character-icons/${slug}.webp`,
    `assets/character-icons/${slug}.png`,
  ];
}

function setImageFromCandidates(image, candidates, onMissing) {
  let index = 0;

  function tryNext() {
    if (index >= candidates.length) {
      if (onMissing) {
        onMissing();
      }
      return;
    }

    image.onerror = () => {
      index += 1;
      tryNext();
    };

    image.src = candidates[index];
  }

  tryNext();
}

function toggleDropdown(open) {
  const shouldOpen = typeof open === "boolean" ? open : setList.hidden;
  setList.hidden = !shouldOpen;
  dropdownButton.setAttribute("aria-expanded", String(shouldOpen));
}

function setActiveSet(setName) {
  const buttons = setList.querySelectorAll(".set-item");
  for (const button of buttons) {
    button.classList.toggle("active", button.dataset.setName === setName);
  }
}

function selectSet(setName) {
  renderCharacters(setName);
  setActiveSet(setName);
  selectedSetName.textContent = setName;
  persistSelection(setName);
  toggleDropdown(false);
  selectedSetIcon.alt = `${setName} icon`;
  setImageFromCandidates(selectedSetIcon, getSetIconCandidates(setName));
}

function renderSetList(setNames) {
  setList.innerHTML = "";

  for (const setName of setNames) {
    const listItem = document.createElement("li");
    const button = document.createElement("button");
    const icon = document.createElement("img");
    const name = document.createElement("span");

    button.type = "button";
    button.className = "set-item";
    button.dataset.setName = setName;
    button.addEventListener("click", () => selectSet(setName));

    icon.className = "set-icon";
    icon.alt = `${setName} icon`;
    setImageFromCandidates(icon, getSetIconCandidates(setName));

    name.className = "set-name";
    name.textContent = setName;

    button.appendChild(icon);
    button.appendChild(name);
    listItem.appendChild(button);
    setList.appendChild(listItem);
  }
}

function renderCharacters(setName) {
  const characters = echoSetToCharacters[setName] || [];
  charactersList.innerHTML = "";

  if (characters.length === 0) {
    const item = document.createElement("li");
    item.textContent = "No data for this set.";
    charactersList.appendChild(item);
    return;
  }

  for (const name of characters) {
    const item = document.createElement("li");
    const frame = document.createElement("div");
    const icon = document.createElement("img");
    const nameSpan = document.createElement("span");

    frame.className = "character-frame";
    icon.className = "character-icon";
    icon.alt = `${name} icon`;
    setImageFromCandidates(icon, getCharacterIconCandidates(name), () => {
      icon.style.display = "none";
    });

    nameSpan.className = "character-name";
    nameSpan.textContent = name;

    frame.appendChild(icon);
    item.appendChild(frame);
    item.appendChild(nameSpan);
    charactersList.appendChild(item);
  }
}

function persistSelection(setName) {
  if (hasChromeStorage) {
    chrome.storage.local.set({ selectedEchoSet: setName });
    return;
  }

  window.localStorage.setItem("selectedEchoSet", setName);
}

function getSavedSelection() {
  if (hasChromeStorage) {
    return new Promise((resolve) => {
      chrome.storage.local.get(["selectedEchoSet"], (result) => {
        resolve(result.selectedEchoSet || null);
      });
    });
  }

  return Promise.resolve(window.localStorage.getItem("selectedEchoSet"));
}

async function init() {
  const setNames = Object.keys(echoSetToCharacters).sort((a, b) => a.localeCompare(b));

  renderSetList(setNames);

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

  const savedSet = await getSavedSelection();
  if (savedSet && echoSetToCharacters[savedSet]) {
    selectSet(savedSet);
    return;
  }

  if (setNames.length > 0 && echoSetToCharacters[setNames[0]]) {
    selectSet(setNames[0]);
  }
}

init();
