# WUWA Echo Set Finder (Opera Extension)

Opera extension (Chrome Extension Manifest V3 compatible):

- pick an Echo set in the popup;
- see the list of characters that use it.

## Run as a local website

1. Open this folder in VS Code.
2. Install dependencies:
	- `npm install`
3. Start local server:
	- `npm run dev`
4. Open `http://localhost:5500/index.html` in your browser.

Alternative without npm:
- `python -m http.server 5500`

The selected Echo set is saved in browser `localStorage`.

## Install in Opera

1. Open `opera://extensions`.
2. Enable **Developer mode**.
3. Click **Load unpacked**.
4. Select the `wuwa extension` project folder.

## How to use

1. Open https://wuwaguide.kurogames.com/.
2. Click the extension icon.
3. Choose an Echo set from the dropdown.
4. The character list appears below.

## Edit the set database

The dictionary lives in `app-core.js` as `echoSetToCharacters`.
You can add/remove sets and characters there.

## Shared code structure (site + extension)

- `app-core.js` — shared UI/data logic.
- `site.js` — website entry point (`localStorage`).
- `popup.js` — extension entry point (`chrome.storage.local`).
- `index.html` — shared page used by both local website and extension popup.

## Add icons

### Echo set icons
Place `.webp` (or `.png`) files in `assets/echo-set-icons/`  
File names should be kebab-case (example: `celestial-light.webp`).

### Character icons
Place `.webp` (or `.png`) files in `assets/character-icons/`  
See the full file name list in `assets/character-icons/README.md`.

Recommended sizes:
- Echo sets: 64x64 or 128x128
- Characters: 128x128 or 256x256 (rendered at 70x70)
