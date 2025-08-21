# Hide Gemini in Google Meet

A simple Chrome extension that hides the "Ask Gemini" and "Let Gemini take notes for this meeting" icons in Google Meet.
These icons often pop up and block the meeting interface — this extension removes them automatically.

It also includes a toggle in the extension's Options page so you can turn the feature on/off without uninstalling.

## 🚀 Local Installation

This extension is designed for local installation only and is not available on the Chrome Web Store.

### 1. Get the extension files
Clone this repository or download the ZIP file and extract it:
```bash
git clone [repository-url]
# or download and extract the ZIP file
```

The folder should contain these files:
- `manifest.json`
- `content.js`
- `options.html`
- `options.js`
- `README.md`

### 2. Open Chrome Extensions Manager
1. Open Google Chrome
2. Navigate to `chrome://extensions/`
3. Alternatively, go to **Menu** → **More tools** → **Extensions**

### 3. Enable Developer Mode
Toggle the **Developer mode** switch in the top-right corner of the extensions page.

### 4. Load the unpacked extension
1. Click **Load unpacked** button
2. Browse to and select the folder containing the extension files
3. Click **Select Folder** (or **Open** on some systems)

### 5. Verify installation
- The extension should now appear in your list of installed extensions
- You should see "Hide Gemini in Google Meet" with a toggle to enable/disable it
- Join a Google Meet → the Gemini icons should be hidden automatically! 🎉

> **Note**: Since this is a local installation, the extension will only be available on this specific Chrome browser/profile.

## ⚙️ Options

1. Go to `chrome://extensions/`
2. Find **Hide Gemini in Google Meet**
3. Click **Details** → **Extension options**
4. Use the checkbox to enable/disable hiding Gemini icons
5. The setting is saved automatically.

## 🔄 Updating

If you make changes to the extension files:

1. Go to `chrome://extensions/`
2. Click **Reload** (circular arrow) on the extension card.
3. Refresh your Google Meet tab.

## 🛠 Notes

- **Default behavior**: Gemini icons are hidden.
- Uses a `MutationObserver` to catch UI changes (since Meet dynamically re-renders).
- Settings are stored in `chrome.storage.sync` and will sync across your Chrome profile.