import { initEchoFinder } from "./app-core.js";

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

void initEchoFinder(extensionStorage);
