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
const hint = document.getElementById("hint");

function getSetSlug(setName) {
  return setName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

async function getAvailableIconPath(setName) {
  const slug = getSetSlug(setName);
  const formats = ["webp", "png"];

  for (const format of formats) {
    const path = `assets/echo-set-icons/${slug}.${format}`;
    try {
      const response = await fetch(path, { method: "HEAD" });
      if (response.ok) {
        return path;
      }
    } catch (e) {
      // fallthrough to next format
    }
  }

  return `assets/echo-set-icons/${slug}.webp`;
}

function getCharacterSlug(characterName) {
  return characterName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

async function getAvailableCharacterIconPath(characterName) {
  let slug = getCharacterSlug(characterName);
  
  // Unified icons for Rovers
  if (characterName.includes("Rover")) {
    slug = "rover";
  }
  
  const formats = ["webp", "png"];

  for (const format of formats) {
    const path = `assets/character-icons/${slug}.${format}`;
    try {
      const response = await fetch(path, { method: "HEAD" });
      if (response.ok) {
        return path;
      }
    } catch (e) {
      // fallthrough to next format
    }
  }

  return null;
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

  getAvailableIconPath(setName).then((path) => {
    selectedSetIcon.src = path;
    selectedSetIcon.alt = `${setName} icon`;
  });
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

    getAvailableIconPath(setName).then((path) => {
      icon.src = path;
    });

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

    getAvailableCharacterIconPath(name).then((path) => {
      if (path) {
        icon.src = path;
      } else {
        icon.style.display = "none";
      }
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
  chrome.storage.local.set({ selectedEchoSet: setName });
}

function init() {
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

  chrome.storage.local.get(["selectedEchoSet"], (result) => {
    const savedSet = result.selectedEchoSet;
    if (savedSet && echoSetToCharacters[savedSet]) {
      selectSet(savedSet);
      return;
    }

    if (setNames.length > 0 && echoSetToCharacters[setNames[0]]) {
      selectSet(setNames[0]);
    }
  });
}

init();
