import {
  echoSetToCharacters,
  getSortedSetNames,
  renderCharacters,
  renderSetList,
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
const charactersList = document.getElementById("characters");

async function selectSet(setName) {
  renderCharacters(charactersList, setName);
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
