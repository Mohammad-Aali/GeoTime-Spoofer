// PRESET PROFILES: Huge database of global locations mapping Timezone to GPS and Locale
const PROFILES = {
  "America/New_York": { timezone: "America/New_York", locale: "en-US", acceptLanguage: "en-US,en;q=0.9", lat: 40.7128, lon: -74.0060 },
  "America/Chicago": { timezone: "America/Chicago", locale: "en-US", acceptLanguage: "en-US,en;q=0.9", lat: 41.8781, lon: -87.6298 },
  "America/Denver": { timezone: "America/Denver", locale: "en-US", acceptLanguage: "en-US,en;q=0.9", lat: 39.7392, lon: -104.9903 },
  "America/Los_Angeles": { timezone: "America/Los_Angeles", locale: "en-US", acceptLanguage: "en-US,en;q=0.9", lat: 34.0522, lon: -118.2437 },
  "America/Toronto": { timezone: "America/Toronto", locale: "en-CA", acceptLanguage: "en-CA,en;q=0.9", lat: 43.6510, lon: -79.3470 },
  "America/Vancouver": { timezone: "America/Vancouver", locale: "en-CA", acceptLanguage: "en-CA,en;q=0.9", lat: 49.2827, lon: -123.1207 },
  "America/Mexico_City": { timezone: "America/Mexico_City", locale: "es-MX", acceptLanguage: "es-MX,es;q=0.9,en;q=0.8", lat: 19.4326, lon: -99.1332 },
  "America/Sao_Paulo": { timezone: "America/Sao_Paulo", locale: "pt-BR", acceptLanguage: "pt-BR,pt;q=0.9,en;q=0.8", lat: -23.5505, lon: -46.6333 },
  "America/Buenos_Aires": { timezone: "America/Buenos_Aires", locale: "es-AR", acceptLanguage: "es-AR,es;q=0.9,en;q=0.8", lat: -34.6037, lon: -58.3816 },
  "America/Bogota": { timezone: "America/Bogota", locale: "es-CO", acceptLanguage: "es-CO,es;q=0.9,en;q=0.8", lat: 4.7110, lon: -74.0721 },
  "Europe/London": { timezone: "Europe/London", locale: "en-GB", acceptLanguage: "en-GB,en;q=0.9", lat: 51.5074, lon: -0.1278 },
  "Europe/Paris": { timezone: "Europe/Paris", locale: "fr-FR", acceptLanguage: "fr-FR,fr;q=0.9,en;q=0.8", lat: 48.8566, lon: 2.3522 },
  "Europe/Berlin": { timezone: "Europe/Berlin", locale: "de-DE", acceptLanguage: "de-DE,de;q=0.9,en;q=0.8", lat: 52.5200, lon: 13.4050 },
  "Europe/Madrid": { timezone: "Europe/Madrid", locale: "es-ES", acceptLanguage: "es-ES,es;q=0.9,en;q=0.8", lat: 40.4168, lon: -3.7038 },
  "Europe/Rome": { timezone: "Europe/Rome", locale: "it-IT", acceptLanguage: "it-IT,it;q=0.9,en;q=0.8", lat: 41.9028, lon: 12.4964 },
  "Europe/Amsterdam": { timezone: "Europe/Amsterdam", locale: "nl-NL", acceptLanguage: "nl-NL,nl;q=0.9,en;q=0.8", lat: 52.3676, lon: 4.9041 },
  "Europe/Stockholm": { timezone: "Europe/Stockholm", locale: "sv-SE", acceptLanguage: "sv-SE,sv;q=0.9,en;q=0.8", lat: 59.3293, lon: 18.0686 },
  "Europe/Moscow": { timezone: "Europe/Moscow", locale: "ru-RU", acceptLanguage: "ru-RU,ru;q=0.9,en;q=0.8", lat: 55.7558, lon: 37.6173 },
  "Europe/Istanbul": { timezone: "Europe/Istanbul", locale: "tr-TR", acceptLanguage: "tr-TR,tr;q=0.9,en;q=0.8", lat: 41.0082, lon: 28.9784 },
  "Europe/Kyiv": { timezone: "Europe/Kyiv", locale: "uk-UA", acceptLanguage: "uk-UA,uk;q=0.9,en;q=0.8", lat: 50.4501, lon: 30.5234 },
  "Europe/Warsaw": { timezone: "Europe/Warsaw", locale: "pl-PL", acceptLanguage: "pl-PL,pl;q=0.9,en;q=0.8", lat: 52.2297, lon: 21.0122 },
  "Asia/Dubai": { timezone: "Asia/Dubai", locale: "ar-AE", acceptLanguage: "ar-AE,ar;q=0.9,en;q=0.8", lat: 25.2048, lon: 55.2708 },
  "Asia/Riyadh": { timezone: "Asia/Riyadh", locale: "ar-SA", acceptLanguage: "ar-SA,ar;q=0.9,en;q=0.8", lat: 24.7136, lon: 46.6753 },
  "Asia/Tehran": { timezone: "Asia/Tehran", locale: "fa-IR", acceptLanguage: "fa-IR,fa;q=0.9,en;q=0.8", lat: 35.6892, lon: 51.3890 },
  "Asia/Mumbai": { timezone: "Asia/Mumbai", locale: "hi-IN", acceptLanguage: "hi-IN,hi;q=0.9,en;q=0.8", lat: 19.0760, lon: 72.8777 },
  "Asia/Bangkok": { timezone: "Asia/Bangkok", locale: "th-TH", acceptLanguage: "th-TH,th;q=0.9,en;q=0.8", lat: 13.7563, lon: 100.5018 },
  "Asia/Jakarta": { timezone: "Asia/Jakarta", locale: "id-ID", acceptLanguage: "id-ID,id;q=0.9,en;q=0.8", lat: -6.2088, lon: 106.8456 },
  "Asia/Singapore": { timezone: "Asia/Singapore", locale: "en-SG", acceptLanguage: "en-SG,en;q=0.9", lat: 1.3521, lon: 103.8198 },
  "Asia/Tokyo": { timezone: "Asia/Tokyo", locale: "ja-JP", acceptLanguage: "ja-JP,ja;q=0.9,en;q=0.8", lat: 35.6762, lon: 139.6503 },
  "Asia/Seoul": { timezone: "Asia/Seoul", locale: "ko-KR", acceptLanguage: "ko-KR,ko;q=0.9,en;q=0.8", lat: 37.5665, lon: 126.9780 },
  "Asia/Shanghai": { timezone: "Asia/Shanghai", locale: "zh-CN", acceptLanguage: "zh-CN,zh;q=0.9,en;q=0.8", lat: 31.2304, lon: 121.4737 },
  "Asia/Hong_Kong": { timezone: "Asia/Hong_Kong", locale: "zh-HK", acceptLanguage: "zh-HK,zh;q=0.9,en;q=0.8", lat: 22.3193, lon: 114.1694 },
  "Australia/Sydney": { timezone: "Australia/Sydney", locale: "en-AU", acceptLanguage: "en-AU,en;q=0.9", lat: -33.8688, lon: 151.2093 },
  "Australia/Melbourne": { timezone: "Australia/Melbourne", locale: "en-AU", acceptLanguage: "en-AU,en;q=0.9", lat: -37.8136, lon: 144.9631 },
  "Pacific/Auckland": { timezone: "Pacific/Auckland", locale: "en-NZ", acceptLanguage: "en-NZ,en;q=0.9", lat: -36.8485, lon: 174.7633 },
  "Africa/Cairo": { timezone: "Africa/Cairo", locale: "ar-EG", acceptLanguage: "ar-EG,ar;q=0.9,en;q=0.8", lat: 30.0444, lon: 31.2357 },
  "Africa/Lagos": { timezone: "Africa/Lagos", locale: "en-NG", acceptLanguage: "en-NG,en;q=0.9", lat: 6.5244, lon: 3.3792 },
  "Africa/Johannesburg": { timezone: "Africa/Johannesburg", locale: "en-ZA", acceptLanguage: "en-ZA,en;q=0.9", lat: -26.2041, lon: 28.0473 }
};

// Main function to apply all overrides safely via Chrome DevTools Protocol
function applyProfileToTab(tabId, timezoneKey, completionCallback) {
  if (!timezoneKey || !tabId || tabId < 0) {
    if (completionCallback) completionCallback();
    return;
  }
  
  const profile = PROFILES[timezoneKey];
  if (!profile) {
    if (completionCallback) completionCallback();
    return;
  }

  const targetDebuggee = { tabId: tabId };

  chrome.debugger.detach(targetDebuggee, () => {
    chrome.runtime.lastError; 

    chrome.debugger.attach(targetDebuggee, "1.3", () => {
      if (chrome.runtime.lastError) {
        if (completionCallback) completionCallback();
        return; 
      }

      chrome.debugger.sendCommand(targetDebuggee, "Emulation.setTimezoneOverride", {
        timezoneId: profile.timezone 
      }, () => {
        chrome.runtime.lastError;
        
        chrome.debugger.sendCommand(targetDebuggee, "Emulation.setLocaleOverride", {
          locale: profile.locale 
        }, () => {
          chrome.runtime.lastError;

          chrome.debugger.sendCommand(targetDebuggee, "Emulation.setGeolocationOverride", {
            latitude: profile.lat,
            longitude: profile.lon,
            accuracy: 10
          }, () => {
            chrome.runtime.lastError;

            chrome.debugger.sendCommand(targetDebuggee, "Network.setUserAgentOverride", {
              userAgent: navigator.userAgent,
              acceptLanguage: profile.acceptLanguage 
            }, () => {
              chrome.runtime.lastError;
              if (completionCallback) completionCallback();
            });
          });
        });
      });
    });
  });
}

// 1. AUTO-APPLY WHEN NAVIGATING OR OPENING NEW TABS
chrome.webNavigation.onCommitted.addListener((details) => {
  if (details.frameId === 0) {
    chrome.storage.local.get(['targetTimezone', 'isActive'], (data) => {
      if (data.isActive && data.targetTimezone) {
        applyProfileToTab(details.tabId, data.targetTimezone);
      }
    });
  }
});

// 2. LISTEN FOR POPUP UI COMMANDS
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "update_profile") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]) {
        applyProfileToTab(tabs[0].id, message.timezone, () => {
          chrome.tabs.reload(tabs[0].id);
        });
      }
    });
    sendResponse({ success: true });
  } 
  else if (message.action === "disable_profile") {
    // Find ALL tabs that have the debugger attached and detach them cleanly
    chrome.debugger.getTargets((targets) => {
      let activeTabDetached = false;
      
      for (let target of targets) {
        if (target.attached && target.type === "page") {
          chrome.debugger.detach({ targetId: target.id }, () => {
            chrome.runtime.lastError;
            // Reload the tab so the Warning Bar disappears and the real timezone restores
            if (target.tabId) {
              chrome.tabs.reload(target.tabId);
            }
          });
        }
      }
    });
    sendResponse({ success: true });
  }
  return true;
});

// Clean up links when tabs are manually closed
chrome.tabs.onRemoved.addListener((tabId) => {
  chrome.debugger.detach({ tabId: tabId }, () => { chrome.runtime.lastError; });
});