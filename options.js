const checkbox = document.getElementById("enabled");

// Load saved setting
chrome.storage.sync.get("enabled", (data) => {
  checkbox.checked = data.enabled !== false; // default: true
});

// Save on change
checkbox.addEventListener("change", () => {
  chrome.storage.sync.set({ enabled: checkbox.checked });
});