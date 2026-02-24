import { initEchoFinder } from "./app-core.js";

const siteStorage = {
  setSelectedEchoSet(setName) {
    window.localStorage.setItem("selectedEchoSet", setName);
    return Promise.resolve();
  },
  getSelectedEchoSet() {
    return Promise.resolve(window.localStorage.getItem("selectedEchoSet"));
  },
};

void initEchoFinder(siteStorage);
