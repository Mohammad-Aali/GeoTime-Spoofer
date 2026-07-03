# GeoTime Spoofer

A powerful, Manifest V3 Google Chrome extension designed to natively spoof your browser's Timezone, Geolocation, Locale, and Language headers.

Unlike standard privacy extensions that use easily detectable JavaScript overrides, this extension utilizes the Chrome DevTools Protocol (CDP) to modify settings deep within the browser engine, allowing you to bypass advanced browser fingerprinting and anti-bot systems.

---

## ✨ Features

- **Native CDP Engine:** Modifies the V8 engine natively rather than overriding Intl.DateTimeFormat or Date.prototype, leaving zero JavaScript footprint.
- **All-in-One Spoofing:** Automatically aligns your Timezone, HTML5 Geolocation (GPS), and Browser Locale (e.g., en-US, ja-JP) in a single click.
- **Defeats Advanced Fingerprinting:** Successfully passes tests on strict anonymity checkers like Whoer, BrowserLeaks, Pixelscan, and CreepJS.
- **Zero Race Conditions:** Freezes page execution while attaching the debugger to ensure the environment is perfectly spoofed from the very first frame of rendering.
- **Modern UI:** Features a clean, custom-built searchable dropdown interface with 35+ pre-configured global locations.
- **True Clean-up:** Turning off the extension instantly detaches the debugger and refreshes tabs back to their authentic hardware state.

---

## 🚀 Why This Method?

Standard timezone spoofers modify JavaScript prototypes. Security scripts (like Cloudflare, Akamai, or FingerprintJS) can easily detect this by checking if `.toString()` returns modified code instead of `[native code]`, or by cross-referencing your Timezone with your Browser Language and Geolocation.

This extension solves this by using `Emulation.setTimezoneOverride` and `Emulation.setGeolocationOverride` via the `chrome.debugger` API. To the website, your environment looks 100% authentic and un-tampered.

---

## 🛠️ Installation Guide

You can install it manually in a few seconds:

- Click the green **Code** button at the top of this repository and select **Download ZIP**.
- Extract the downloaded ZIP file to a folder on your computer.
- Open Google Chrome and navigate to `chrome://extensions/`.
- Turn on **Developer mode** using the toggle switch in the top right corner.
- Click the **Load unpacked** button in the top left.
- Select the extracted folder containing the extension files.

---

## 💡 How to Use

- **Turn on your VPN/Proxy:** Connect your computer to a VPN server in your desired target country (e.g., Germany).
- **Open the Extension:** Click the extension icon in your Chrome toolbar.
- **Select Location:** Use the searchable dropdown to select the matching city (e.g., Europe/Berlin).
- **Power On:** Click the large circular power button to activate the spoofer. The extension will automatically reload your active tab with the newly spoofed environment!

*Note: Because this tool uses the DevTools Protocol, Chrome will display a native warning bar at the top of the screen ("GeoTime Spoofer started debugging this tab"). This is a mandatory security feature built into Chromium and cannot be hidden.*

---

## 🛑 Important Privacy Note (VPN Leaks)

While this extension perfectly spoofs your browser's internal software environment (Timezone, Locale, GPS), **it does not manage your network traffic**. 

If you are trying to remain completely anonymous or access geo-restricted systems, you must ensure your VPN/Proxy is properly configured. **This extension DOES NOT prevent:**

- **WebRTC Leaks:** Chrome's WebRTC can sometimes bypass your VPN tunnel and broadcast your true, physical public IP address directly to a website.
- **DNS Leaks:** If your VPN routes DNS queries through your local ISP rather than its own secure servers, advanced security systems can immediately infer your true location.

**Recommendation:** Always pair this extension with a high-quality, leak-proof VPN. Test your connection on sites like [dnsleaktest.com](https://dnsleaktest.com/) or [browserleaks.com/webrtc](https://browserleaks.com/webrtc) to ensure your IP and DNS are fully masked.

---

## 🧪 How to Test

After enabling the extension, you can verify whether your timezone, locale, and geolocation overrides are correctly applied using the following tools:

- [Webbrowsertools Timezone Test](https://webbrowsertools.com/timezone/) - Checks your browser’s detected timezone, system time offsets, and consistency with locale settings.
- [Browser Fingerprinting Test (Madaidan)](https://madaidan.github.io/) - A comprehensive fingerprinting test covering timezone, locale, canvas, WebGL, and other identifying signals.

### What to look for

When the extension is working correctly, these tests should show:

- Timezone matches the selected spoofed region
- Locale (language / region) aligns with the chosen setting
- Geolocation reflects the selected city/country (if enabled)
- No mismatch between timezone, language, and reported region

---

## ⚠️ Disclaimer

This extension is provided for educational purposes, privacy research, and security testing only. The author is not responsible for any misuse of this tool or violations of third-party Terms of Service.
