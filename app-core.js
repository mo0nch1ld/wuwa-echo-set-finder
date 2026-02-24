export const echoSetToCharacters = {
  "Havoc Eclipse": ["Cantarella", "Camellya", "Havoc Rover", "Danjin"],
  "Trailblazing Star": ["Aemeath"],
  "Tidebreaking Courage": ["Brant"],
  "Eternal Radiance": ["Phoebe", "Spectro Rover", "Zani"],
  "Moonlit Clouds": ["Roccia", "Zhezhi", "Jianxin", "Yangyang", "Sanhua", "Taoqi", "Mortefi"],
  "Frosty Resolve": ["Carlotta"],
  "Rejuvenating Glow": ["Shorekeeper", "Aero Rover", "Verina", "Youhu", "Baizhi", "Buling"],
  "Void Thunder": ["Xiangli Yao", "Calcharo", "Lumi"],
  "Celestial Light": ["Jinhsi"],
  "Molten Rift": ["Changli", "Encore", "Chixia"],
  "Sierra Gale": ["Jiyan", "Aalto"],
  "Empyrean Anthem": ["Yinlin", "Yuanwu"],
  "Freezing Frost": ["Lingyang"],
  "Gusts of Welkin": ["Ciaccona"],
  "Windward Pilgrimage": ["Cartethyia"],
  "Flaming Clawprint": ["Lupa"],
  "Dream of the Lost": ["Phrolova"],
  "Crown of Valor": ["Augusta", "Iuno"],
  "Flamewing's Shadow": ["Galbrena"],
  "Law of Harmony": ["Qiuyuan"],
  "Thread of Severed Fate": ["Chisa"],
  "Pact of Neonlight Leap": ["Lynae"],
  "Halo of Starry Radiance": ["Mornye"],
};

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

export function getSortedSetNames() {
  return Object.keys(echoSetToCharacters).sort((a, b) => a.localeCompare(b));
}

export function renderCharacters(charactersList, setName) {
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

export function setActiveSet(setList, setName) {
  const buttons = setList.querySelectorAll(".set-item");
  for (const button of buttons) {
    button.classList.toggle("active", button.dataset.setName === setName);
  }
}

export function renderSetList(setList, setNames, onSelect) {
  setList.innerHTML = "";

  for (const setName of setNames) {
    const listItem = document.createElement("li");
    const button = document.createElement("button");
    const icon = document.createElement("img");
    const name = document.createElement("span");

    button.type = "button";
    button.className = "set-item";
    button.dataset.setName = setName;
    button.addEventListener("click", () => {
      void onSelect(setName);
    });

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

export function setSelectedSetIcon(selectedSetIcon, selectedSetName, setName) {
  selectedSetName.textContent = setName;
  selectedSetIcon.alt = `${setName} icon`;
  setImageFromCandidates(selectedSetIcon, getSetIconCandidates(setName));
}
