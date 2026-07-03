document.addEventListener('DOMContentLoaded', () => {
  const powerBtn = document.getElementById('powerBtn');
  const statusText = document.getElementById('statusText');
  const statusBadge = document.getElementById('statusBadge');
  
  // Custom Dropdown Elements
  const dropdown = document.getElementById('locationDropdown');
  const dropdownBtn = document.getElementById('dropdownBtn');
  const dropdownLabel = document.getElementById('dropdownLabel');
  const dropdownList = document.getElementById('dropdownList');
  const dropdownSearch = document.getElementById('dropdownSearch');

  let isSpoofingActive = false;
  let currentSelection = "America/New_York";

  // Massive Database of Locations (Prioritizing Top VPN Nodes)
  const locations = [
    { id: "America/New_York", label: "US - New York (EST)" },
    { id: "America/Chicago", label: "US - Chicago (CST)" },
    { id: "America/Denver", label: "US - Denver (MST)" },
    { id: "America/Los_Angeles", label: "US - Los Angeles (PST)" },
    { id: "Europe/London", label: "UK - London (GMT)" },
    { id: "Europe/Paris", label: "FR - Paris (CET)" },
    { id: "Europe/Berlin", label: "DE - Frankfurt/Berlin (CET)" },
    { id: "Europe/Amsterdam", label: "NL - Amsterdam (CET)" },
    { id: "Europe/Warsaw", label: "PL - Warsaw (CET)" },
    { id: "Europe/Istanbul", label: "TR - Istanbul (TRT)" },
    { id: "America/Toronto", label: "CA - Toronto (EST)" },
    { id: "America/Vancouver", label: "CA - Vancouver (PST)" },
    { id: "America/Mexico_City", label: "MX - Mexico City (CST)" },
    { id: "America/Sao_Paulo", label: "BR - Sao Paulo (BRT)" },
    { id: "America/Buenos_Aires", label: "AR - Buenos Aires (ART)" },
    { id: "America/Bogota", label: "CO - Bogota (COT)" },
    { id: "Europe/Madrid", label: "ES - Madrid (CET)" },
    { id: "Europe/Rome", label: "IT - Rome (CET)" },
    { id: "Europe/Stockholm", label: "SE - Stockholm (CET)" },
    { id: "Europe/Moscow", label: "RU - Moscow (MSK)" },
    { id: "Europe/Kyiv", label: "UA - Kyiv (EET)" },
    { id: "Asia/Dubai", label: "AE - Dubai (GST)" },
    { id: "Asia/Riyadh", label: "SA - Riyadh (AST)" },
    { id: "Asia/Tehran", label: "IR - Tehran (IRST)" },
    { id: "Asia/Mumbai", label: "IN - Mumbai (IST)" },
    { id: "Asia/Bangkok", label: "TH - Bangkok (ICT)" },
    { id: "Asia/Jakarta", label: "ID - Jakarta (WIB)" },
    { id: "Asia/Singapore", label: "SG - Singapore (SGT)" },
    { id: "Asia/Tokyo", label: "JP - Tokyo (JST)" },
    { id: "Asia/Seoul", label: "KR - Seoul (KST)" },
    { id: "Asia/Shanghai", label: "CN - Shanghai (CST)" },
    { id: "Asia/Hong_Kong", label: "HK - Hong Kong (HKT)" },
    { id: "Australia/Sydney", label: "AU - Sydney (AEST)" },
    { id: "Australia/Melbourne", label: "AU - Melbourne (AEST)" },
    { id: "Pacific/Auckland", label: "NZ - Auckland (NZST)" },
    { id: "Africa/Cairo", label: "EG - Cairo (EET)" },
    { id: "Africa/Lagos", label: "NG - Lagos (WAT)" },
    { id: "Africa/Johannesburg", label: "ZA - Johannesburg (SAST)" }
  ];

  // Helper to Update Main UI State
  function updateUIState(active, timezoneId) {
    isSpoofingActive = active;
    
    const selectedLoc = locations.find(loc => loc.id === timezoneId);
    if (selectedLoc) {
      dropdownLabel.textContent = selectedLoc.label;
      currentSelection = timezoneId;
    }

    document.querySelectorAll('.custom-dropdown-item').forEach(el => {
      el.classList.toggle('selected', el.dataset.value === timezoneId);
    });

    if (active) {
      powerBtn.classList.add('active');
      statusBadge.classList.add('active');
      statusBadge.textContent = 'ON';
      statusText.textContent = selectedLoc ? selectedLoc.label.split('-')[1].trim().split(' ')[0] : 'Active';
    } else {
      powerBtn.classList.remove('active');
      statusBadge.classList.remove('active');
      statusBadge.textContent = 'OFF';
      statusText.textContent = 'Disconnected';
    }
  }

  // Populate Custom Dropdown
  function populateDropdown(filter = "") {
    dropdownList.innerHTML = "";
    const lowerFilter = filter.toLowerCase();
    
    locations.forEach(loc => {
      if (loc.label.toLowerCase().includes(lowerFilter)) {
        const item = document.createElement('div');
        item.className = 'custom-dropdown-item';
        item.dataset.value = loc.id;
        item.textContent = loc.label;
        if (loc.id === currentSelection) item.classList.add('selected');
        
        // Handle Item Click (Applies instantly if power is ON)
        item.addEventListener('click', async () => {
          dropdown.classList.remove('open');
          
          if (currentSelection !== loc.id) {
            currentSelection = loc.id;
            await chrome.storage.local.set({ targetTimezone: currentSelection });
            
            if (isSpoofingActive) {
              statusText.textContent = 'Applying...';
              chrome.runtime.sendMessage({ action: "update_profile", timezone: currentSelection }, () => {
                updateUIState(true, currentSelection);
              });
            } else {
               updateUIState(false, currentSelection);
            }
          }
        });
        dropdownList.appendChild(item);
      }
    });
  }

  // Initialize
  populateDropdown();
  chrome.storage.local.get(['targetTimezone', 'isActive'], (data) => {
    const tz = data.targetTimezone || "America/New_York";
    updateUIState(Boolean(data.isActive), tz);
  });

  // Dropdown UI Interactions
  dropdownBtn.addEventListener('click', (e) => {
    e.preventDefault();
    dropdown.classList.toggle('open');
    if (dropdown.classList.contains('open')) {
      dropdownSearch.value = "";
      populateDropdown();
      dropdownSearch.focus();
    }
  });

  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('open');
    }
  });

  dropdownSearch.addEventListener('input', (e) => {
    populateDropdown(e.target.value);
  });

  // Handle Main Power Button Click
  powerBtn.addEventListener('click', async () => {
    if (!isSpoofingActive) {
      statusText.textContent = 'Connecting...';
      await chrome.storage.local.set({ targetTimezone: currentSelection, isActive: true });
      chrome.runtime.sendMessage({ action: "update_profile", timezone: currentSelection }, () => {
        updateUIState(true, currentSelection);
      });
    } else {
      statusText.textContent = 'Disconnecting...';
      await chrome.storage.local.set({ isActive: false });
      chrome.runtime.sendMessage({ action: "disable_profile" }, () => {
        updateUIState(false, currentSelection);
      });
    }
  });
});