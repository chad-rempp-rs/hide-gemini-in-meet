function hideGemini() {
  const selectors = [
    '[aria-label*="Ask Gemini"]',
    '[aria-label*="Let Gemini take notes"]',
    'button[aria-label*="Gemini"]',
    'div[aria-label*="Gemini"]',
    // More specific selectors for the button that appears after meetings start
    'button[aria-label="Gemini uses meeting conversations to answer questions"]',
    'button[aria-label*="Gemini uses meeting conversations"]',
    // Target by data attributes that are more stable
    'div[data-promo-anchor-id] button[aria-label*="Gemini"]',
    // Target buttons with jscontroller and specific aria-label patterns
    'button[jscontroller][aria-label*="Gemini"]',
    // Target the entire promo container div
    'div[data-promo-anchor-id]:has(button[aria-label*="Gemini"])',
    // Target any element with Gemini in aria-label
    '[aria-label*="Gemini"]'
  ];

  selectors.forEach(sel => {
    document.querySelectorAll(sel).forEach(el => {
      el.style.display = "none";
      // Also try to hide parent containers
      let parent = el.parentElement;
      if (parent && parent.hasAttribute('data-promo-anchor-id')) {
        parent.style.display = "none";
      }
    });
  });
}

// Watch for DOM changes
const observer = new MutationObserver(() => {
  try {
    chrome.storage.sync.get("enabled", (data) => {
      if (data.enabled !== false) { // default true
        hideGemini();
      }
    });
  } catch (error) {
    // If chrome context is invalid, just run hideGemini directly
    hideGemini();
  }
});

observer.observe(document.body, { childList: true, subtree: true });

// Run once on load
try {
  chrome.storage.sync.get("enabled", (data) => {
    if (data.enabled !== false) {
      hideGemini();
    }
  });
} catch (error) {
  // If chrome context is invalid, just run hideGemini directly
  hideGemini();
}