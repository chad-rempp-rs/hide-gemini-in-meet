function hideGemini() {
  const selectors = [
    '[aria-label*="Ask Gemini"]',
    '[aria-label*="Let Gemini take notes"]',
    'button[aria-label*="Gemini"]',
    'div[aria-label*="Gemini"]'
  ];

  selectors.forEach(sel => {
    document.querySelectorAll(sel).forEach(el => {
      el.style.display = "none";
    });
  });
}

// Watch for DOM changes
const observer = new MutationObserver(() => {
  chrome.storage.sync.get("enabled", (data) => {
    if (data.enabled !== false) { // default true
      hideGemini();
    }
  });
});

observer.observe(document.body, { childList: true, subtree: true });

// Run once on load
chrome.storage.sync.get("enabled", (data) => {
  if (data.enabled !== false) {
    hideGemini();
  }
});