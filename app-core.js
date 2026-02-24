export const echoSetToCharacters = {
  "Freezing Frost": ["Lingyang"],
  "Molten Rift": ["Changli", "Encore", "Chixia"],
  "Void Thunder": ["Xiangli Yao", "Calcharo", "Lumi"],
  "Sierra Gale": ["Jiyan", "Aalto"],
  "Celestial Light": ["Jinhsi"],
  "Havoc Eclipse": ["Cantarella", "Camellya", "Havoc Rover", "Danjin"],
  "Rejuvenating Glow": ["Shorekeeper", "Aero Rover", "Verina", "Youhu", "Baizhi", "Buling"],
  "Moonlit Clouds": ["Roccia", "Zhezhi", "Jianxin", "Yangyang", "Sanhua", "Taoqi", "Mortefi"],
  "Frosty Resolve": ["Carlotta"],
  "Eternal Radiance": ["Phoebe", "Spectro Rover", "Zani"],
  "Empyrean Anthem": ["Yinlin", "Yuanwu"],
  "Tidebreaking Courage": ["Brant"],
  "Gusts of Welkin": ["Ciaccona"],
  "Windward Pilgrimage": ["Cartethyia"],
  "Flaming Clawprint": ["Lupa"],
  "Dream of the Lost": ["Phrolova"],
  "Crown of Valor": ["Augusta", "Iuno"],
  "Law of Harmony": ["Qiuyuan"],
  "Flamewing's Shadow": ["Galbrena"],
  "Thread of Severed Fate": ["Chisa"],
  "Halo of Starry Radiance": ["Mornye"],
  "Pact of Neonlight Leap": ["Lynae"],
  "Trailblazing Star": ["Aemeath"],
};

// Display order for Echo Sets (change numbers to reorder)
export const echoSetDisplayOrder = {
  "Freezing Frost": 1,
  "Molten Rift": 2,
  "Void Thunder": 3,
  "Sierra Gale": 4,
  "Celestial Light": 5,
  "Havoc Eclipse": 6,
  "Rejuvenating Glow": 7,
  "Moonlit Clouds": 8,
  "Lingering Tune": 9,
  "Frosty Resolve": 10,
  "Eternal Radiance": 11,
  "Midnight Veil": 12,
  "Empyrean Anthem": 13,
  "Tidebreaking Courage": 14,
  "Gusts of Welkin": 15,
  "Windward Pilgrimage": 16,
  "Flaming Clawprint": 17,
  "Dream of the Lost": 18,
  "Crown of Valor": 19,
  "Law of Harmony": 20,
  "Flamewing's Shadow": 21,
  "Thread of Severed Fate": 22,
  "Halo of Starry Radiance": 23,
  "Pact of Neonlight Leap": 24,
  "Rite of Glided Revelation": 25,
  "Trailblazing Star": 26,
};

// Echo Set descriptions (add your descriptions here)
export const echoSetDescriptions = {
  "Freezing Frost": {
    type: "double",
    twoPiece: "Glacio DMG +10%.",
    fivePiece: "Glacio DMG +10% after releasing Basic Attack or Heavy Attack. This effect stacks up to 3 times, each stack lasts 15s.",
  },
  "Molten Rift": {
    type: "double",
    twoPiece: "Fusion DMG +10%.",
    fivePiece: "Fusion DMG +30% for 15s after releasing Resonance Skill.",
  },
  "Void Thunder": {
    type: "double",
    twoPiece: "Electro DMG +10%.",
    fivePiece: "Electro DMG +15% after releasing Heavy Attack or Resonance Skill. This effect stacks up to 2 times, each stack lasts 15s.",
  },
  "Sierra Gale": {
    type: "double",
    twoPiece: "Aero DMG +10%.",
    fivePiece: "Aero DMG +30% for 15s after releasing Intro Skill.",
  },
  "Celestial Light": {
    type: "double",
    twoPiece: "Spectro DMG +10%.",
    fivePiece: "Spectro DMG +30% for 15s after releasing Intro Skill.",
  },
  "Havoc Eclipse": {
    type: "double",
    twoPiece: "Havoc DMG +10%.",
    fivePiece: "Havoc DMG +7.5% after releasing Basic Attack or Heavy Attack. This effect stacks up to 4 times, each stack lasts 15s.",
  },
  "Rejuvenating Glow": {
    type: "double",
    twoPiece: "Healing Bonus +10%.",
    fivePiece: "Increases the ATK of all party members by 15% for 30s upon healing allies.",
  },
  "Moonlit Clouds": {
    type: "double",
    twoPiece: "Energy Regen +10%.",
    fivePiece: "After using Outro Skill, increases the ATK of the next Resonator by 22.5% for 15s.",
  },
  "Lingering Tune": {
    type: "double",
    twoPiece: "ATK +10%.",
    fivePiece: "While on the field, ATK increases by 5% every 1.5s. This effect stacks up to 4 stacks. Outro Skill DMG +60%.",
  },
  "Frosty Resolve": {
    type: "double",
    twoPiece: "Resonance Skill DMG +12%.",
    fivePiece: "Casting Resonance Skill grants 22.5% Glacio DMG Bonus for 15s and casting Resonance Liberation increases Resonance Skill DMG by 18%, lasting for 5s. This effect stacks up to 2 times.",
  },
  "Eternal Radiance": {
    type: "double",
    twoPiece: "Spectro DMG +10%.",
    fivePiece: "Inflicting enemies with Spectro Frazzle increases Crit. Rate by 20% for 15s. Attacking enemies with 10 stacks of Spectro Frazzle grants 15% Spectro DMG Bonus for 15s.",
  },
  "Midnight Veil": {
    type: "double",
    twoPiece: "Havoc DMG +10%.",
    fivePiece: "Triggering Outro Skill deals additional 480% Havoc DMG to surrounding enemies, considered Outro Skill DMG and grants the incoming Resonator 15% Havoc DMG Bonus for 15s.",
  },
  "Empyrean Anthem": {
    type: "double",
    twoPiece: "Energy Regen +10%.",
    fivePiece: "Increase the Resonator's Coordinated Attack DMG by 80%. Upon a critical hit of Coordinated Attack, increase the active Resonator's ATK by 20% for 4s.",
  },
  "Tidebreaking Courage": {
    type: "double",
    twoPiece: "Energy Regen +10%.",
    fivePiece: "Increase the Resonator's ATK by 15%. Reaching 250% Energy Regen increases all Attribute DMG by 30% for the Resonator.",
  },
  "Gusts of Welkin": {
    type: "double",
    twoPiece: "Aero DMG +10%.",
    fivePiece: "Inflicting Aero Erosion on enemies increases Aero DMG for all Resonators in the team by 15%, and for the Resonator triggering this effect by an additional 15%, lasting for 20s.",
  },
  "Windward Pilgrimage": {
    type: "double",
    twoPiece: "Aero DMG +10%.",
    fivePiece: "Hitting a target with Aero Erosion increases Crit. Rate by 10% and grants 30% Aero DMG Bonus, lasting for 10s.",
  },
  "Flaming Clawprint": {
    type: "double",
    twoPiece: "Fusion DMG +10%.",
    fivePiece: "Casting Resonance Liberation grants all Resonators in the team 15% Fusion DMG Bonus and the caster 20% Resonance Liberation DMG Bonus, lasting for 35s.",
  },
  "Dream of the Lost": {
    type: "single",
    threePiece: "Holding 0 Resonance Energy increases Crit. Rate by 20% and grants 35% Echo Skill DMG Bonus.",
  },
  "Crown of Valor": {
    type: "single",
    threePiece: "Upon gaining a Shield, increase the Resonator's ATK by 6% and Crit. DMG by 4% for 4s. This effect can be triggered once every 0.5s and stacks up to 5 times.",
  },
  "Law of Harmony": {
    type: "single",
    threePiece: "Casting Echo Skill grants 30% Heavy Attack DMG Bonus to the caster for 4s. Additionally, all Resonators in the team gain 4% Echo Skill DMG Bonus for 30s, stacking up to 4 times. Echoes of the same name can only trigger this effect once. The record of Echo triggering this effect is cleared along with this effect. At 4 stacks, casting Echo Skill again resets the duration of this effect.",
  },
  "Flamewing's Shadow": {
    type: "single",
    threePiece: "Dealing Echo Skill DMG increases Heavy Attack Crit. Rate by 20% for 6s. Dealing Heavy Attack DMG increases Echo Skill Crit. Rate by 20% for 6s. While both effects are active, gain 16% Fusion DMG Bonus.",
  },
  "Thread of Severed Fate": {
    type: "single",
    threePiece: "Inflicting Havoc Bane increases the Resonator's ATK by 20% and grants 30% Resonance Liberation DMG Bonus for 5s.",
  },
  "Halo of Starry Radiance": {
    type: "double",
    twoPiece: "Healing +10%.",
    fivePiece: "When healing a Resonator in the team, every 1% of Off-Tune Buildup Rate grants a 0.2% ATK increase to all Resonators in the team for 4s, up to 25%. Effects of the same name cannot be stacked.",
  },
  "Pact of Neonlight Leap": {
    type: "double",
    twoPiece: "Spectro DMG +10%.",
    fivePiece: "Casting Outro Skill increases the ATK of the incoming Resonator who casts Intro Skill by 15%. Each point of Tune Break Boost the incoming Resonator has additionally increases their ATK by 0.3%, up to 15%. This effect lasts for 15s, or until the Resonator is switched out.",
  },
  "Rite of Glided Revelation": {
    type: "double",
    twoPiece: "Spectro DMG +10%.",
    fivePiece: "Dealing Basic Attack DMG increases Spectro DMG by 10% for 5s, stacking up to 3 times. With 3 stacks, casting Resonance Liberation grants 40% Basic Attack DMG Bonus.",
  },
  "Trailblazing Star": {
    type: "double",
    twoPiece: "Fusion DMG +10%.",
    fivePiece: "Inflicting Fusion Burst or Tune Rupture - Shifting on enemies increases the Resonator's Crit. Rate by 20% and grants 20% Fusion DMG Bonus for 8s.",
  },
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
  return Object.keys(echoSetToCharacters).sort((a, b) => {
    const orderA = echoSetDisplayOrder[a] ?? 999;
    const orderB = echoSetDisplayOrder[b] ?? 999;
    return orderA - orderB;
  });
}

export function renderSetDescription(elements, setName) {
  const description = echoSetDescriptions[setName];

  if (!description) {
    elements.section.hidden = true;
    return;
  }

  const isSingle = description.type === "single";
  const primaryText = isSingle ? description.threePiece : description.twoPiece;
  const secondaryText = isSingle ? "" : description.fivePiece;
  const hasPrimary = Boolean(primaryText && primaryText.trim());
  const hasSecondary = Boolean(secondaryText && secondaryText.trim());

  if (!hasPrimary && !hasSecondary) {
    elements.section.hidden = true;
    return;
  }

  elements.section.hidden = false;
  elements.section.classList.toggle("single", isSingle);
  elements.primaryLabel.textContent = isSingle ? "3-piece Effect" : "2-piece Effect";
  elements.primaryText.textContent = primaryText || "";

  if (isSingle) {
    elements.secondaryWrapper.hidden = true;
  } else {
    elements.secondaryWrapper.hidden = false;
    elements.secondaryLabel.textContent = "5-piece Effect";
    elements.secondaryText.textContent = secondaryText || "";
  }
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
