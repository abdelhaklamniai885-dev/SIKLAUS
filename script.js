/* ============================================================
   Si KLAUS — site script
   Edit CONFIG below to plug in your real links.
   ============================================================ */

const CONFIG = {
  // Put your real Discord invite here, e.g. "https://discord.gg/abcdef"
  discordUrl: "https://discord.gg/vjh53WcFz",
  // Put your real download link here (same link for every Download button,
  // or set per-card via the "url" field in DATA below)
  downloadUrl: "",
  // Your showcase video (opens in a new tab)
  youtubeUrl: "https://www.youtube.com/"
};

/* ============================================================
   Card data — grouped by page id
   ============================================================ */
const DATA = {
  "apk": [
    { icon: "download", title: "FF NORMAL APK", tag: "FF UPDATED", tagColor: "violet",
      specs: [["Name", "NORMAL"], ["App Base", "Fully Optimized"], ["Version", "1.132.1"]],
      action: "Download",
      url: "https://www.mediafire.com/file/tw786x0rbaj75c6/Free_Fire_Normal_1.132.1_-_Si_KLAUS_.xapk.zip/file" },
    { icon: "box", title: "FF MAX APK", tag: "FF UPDATED", tagColor: "violet",
      specs: [["Name", "MAX"], ["App Base", "Fully Optimized"], ["Version", "1.132.1"]],
      action: "Download",
      url: "https://www.mediafire.com/file/sb2zr8mw6vy23gr/Free_Fire_Max_1.132.1_-Si_KLAUS_.xapk.zip/file" },
    { icon: "shield", title: "UID BYPASS APK", tag: "BYPASS", tagColor: "pink",
      specs: [["Name", "BYPASS APK"], ["App Base", "SECURE Build"], ["Status", "Available"]],
      action: "Download" }
  ],

  "emulator": [
    { icon: "monitor", title: "MSI App Player", tag: "RECOMMENDED", tagColor: "violet",
      specs: [["Performance", "Best"], ["Compatibility", "Windows"], ["Type", "Emulator"], ["Version", "5.12.120"]],
      action: "Download",
      url: "https://www.mediafire.com/file/yvaj4m5icygatq2/MSI_APP_KLAUS_5.12.120.exe/file" },
    { icon: "monitor", title: "BlueStacks", tag: "LATEST", tagColor: "green",
      specs: [["Performance", "Max"], ["Compatibility", "All PC"], ["Type", "Emulator"], ["Version", "5.22.130"]],
      action: "Download",
      url: "https://www.mediafire.com/file/79bwn7dv4oc6mjt/BlueStacks_-_Si_KLAUS_.exe/file" }
  ],

  "free-panel": [
    { icon: "sliders", title: "Free PC Panel", tag: "FREE", tagColor: "green",
      specs: [["Name", "SI KLAUS PANEL"], ["App Base", "Optimized"], ["Version", "V.1.3 Updated"], ["Status", "Available"]],
      action: "Download" },
    { icon: "shield", title: "Free Uid Bypass", tag: "FREE", tagColor: "green",
      specs: [["Name", "BYPASS EMULATOR"], ["App Base", "Secure Build"], ["Version", "V.8.6"], ["Status", "Stock Out"]],
      action: "Stock Out", out: true }
  ],

  "paid-sensi": [
    { icon: "file", title: "Optimization File", tag: "6 FILES", tagColor: "cyan",
      specs: [["Files", "6 Uploaded"], ["Type", "Optimization"]],
      action: "Download Files" },
    { icon: "cpu", title: "Driver Booster", tag: "RECOMMENDED", tagColor: "violet",
      specs: [["Files", "1 File"], ["Type", "Driver"]],
      action: "Download" },
    { icon: "sliders", title: "Paid Sensi", tag: "ELITE", tagColor: "orange",
      specs: [["Content", "Settings + File"], ["Type", "Sensi"]],
      action: "Download" }
  ],

  "panel-driver": [
    { icon: "code", title: "c++ Requirements", tag: "RECOMMENDED", tagColor: "violet",
      specs: [["Version", "2.0.0"], ["Type", "Required"]],
      action: "Download" },
    { icon: "zap", title: "Direct X", tag: "IMPORTANT", tagColor: "orange",
      specs: [["Version", "Latest"], ["Type", "Required"]],
      action: "Download" },
    { icon: "box", title: "Runtime Dot.net", tag: "FRAMEWORK", tagColor: "cyan",
      specs: [["Version", "Latest"], ["Type", "Required"]],
      action: "Download" },
    { icon: "wrench", title: "Windrivert Fix", tag: "REQUIRED", tagColor: "red",
      specs: [["Version", "1.5.0"], ["Type", "Fix"]],
      action: "Download" },
    { icon: "wrench", title: "Charms Fix", tag: "REQUIRED", tagColor: "red",
      specs: [["Version", "Latest"], ["Type", "Fix"]],
      action: "Download" },
    { icon: "file", title: "WinRAR Download", tag: "REQUIRED", tagColor: "red",
      specs: [["Version", "Latest"], ["Type", "Extractor"]],
      action: "Download" }
  ],

  "other-issues": [
    { icon: "cpu", title: "HD Disable Hyper V", tag: "IMPORTANT", tagColor: "orange",
      specs: [["Type", "Fix"], ["Status", "Updated"]],
      action: "Download" },
    { icon: "globe", title: "Net Error Fix", tag: "RECOMMENDED", tagColor: "violet",
      specs: [["Type", "Fix"], ["Status", "Latest"]],
      action: "Download" },
    { icon: "monitor", title: "D3D Compiler", tag: "ESSENTIAL", tagColor: "cyan",
      specs: [["Type", "Required"], ["Status", "Updated"]],
      action: "Download" },
    { icon: "shield", title: "Proxy Disconnect", tag: "ESSENTIAL", tagColor: "cyan",
      specs: [["Type", "Bypass Fix"], ["Status", "Updated"]],
      action: "Download" },
    { icon: "database", title: "Memory Issue Fix", tag: "IMPORTANT", tagColor: "orange",
      specs: [["Type", "Memory Fix"], ["Status", "Latest"]],
      action: "Download" },
    { icon: "terminal", title: "ADB Fix", tag: "RECOMMENDED", tagColor: "violet",
      specs: [["Type", "ADB Tool"], ["Status", "Updated"]],
      action: "Download" }
  ]
};

/* ============================================================
   Icons (24x24 stroke set)
   ============================================================ */
const ICONS = {
  download: '<path d="M12 3v12m0 0 4-4m-4 4-4-4"/><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/>',
  box: '<path d="m12 3 8 4v10l-8 4-8-4V7l8-4Z"/><path d="m4 7 8 4 8-4M12 11v10"/>',
  shield: '<path d="M12 3 5 5.5v5.7c0 4.3 2.9 8.1 7 9.3 4.1-1.2 7-5 7-9.3V5.5L12 3Z"/><path d="m9 12 2 2 4-4"/>',
  monitor: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8m-4-4v4"/>',
  sliders: '<path d="M4 6h10m4 0h2M4 12h4m4 0h8M4 18h12m4 0h0"/><circle cx="16" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="18" cy="18" r="2"/>',
  code: '<path d="m8 8-4 4 4 4m8-8 4 4-4 4M14 5l-4 14"/>',
  wrench: '<path d="M14.5 6.5a4 4 0 0 0 5 5L21 10a5 5 0 0 1-7 7l-7.5 3.5L5 18.5 8.5 12 5 8.5A5 5 0 0 1 12 4l1.5 2.5Z"/>',
  cpu: '<rect x="7" y="7" width="10" height="10" rx="1.5"/><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M9 1v3m6-3v3M9 20v3m6-3v3M1 9h3m-3 6h3m16-6h3m-3 6h3"/>',
  zap: '<path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z"/>',
  file: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z"/><path d="M14 3v5h5M9 13h6M9 17h4"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z"/>',
  database: '<ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>',
  terminal: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="m7 9 3 3-3 3m6 0h4"/>'
};

/* ============================================================
   Render cards
   ============================================================ */
function renderCards() {
  document.querySelectorAll("[data-cards]").forEach(grid => {
    const items = DATA[grid.dataset.cards] || [];
    grid.innerHTML = items.map((c, i) => `
      <article class="card" style="--i:${i}">
        <div class="card__head">
          <span class="card__icon"><svg viewBox="0 0 24 24">${ICONS[c.icon] || ICONS.box}</svg></span>
          <h3 class="card__title">${c.title}</h3>
          <span class="tag tag--${c.tagColor || "violet"}">${c.tag}</span>
        </div>
        <div class="card__specs">
          ${c.specs.map(([k, v]) => `<div class="spec"><span>${k}</span><b>${v}</b></div>`).join("")}
        </div>
        ${c.out
          ? `<div class="card__action card__action--out">Stock Out</div>`
          : `<button class="card__action" data-download${c.url ? ` data-url="${c.url}"` : ""}>
               <svg viewBox="0 0 24 24">${ICONS.download}</svg>${c.action}
             </button>`}
      </article>`).join("");
  });
}

/* ============================================================
   Hash router
   ============================================================ */
const VALID_ROUTES = ["home", "apk", "emulator", "free-panel", "paid-sensi", "panel-driver", "other-issues"];

function route() {
  let id = location.hash.replace("#", "") || "home";
  if (!VALID_ROUTES.includes(id)) id = "home";

  document.querySelectorAll(".page").forEach(p => p.classList.toggle("page--active", p.id === id));

  document.querySelectorAll(".nav__links a").forEach(a => {
    a.classList.toggle("active", a.getAttribute("href") === "#" + id);
  });

  // restart card entrance animations
  document.querySelectorAll(".page--active .card").forEach(el => {
    el.style.animation = "none";
    void el.offsetWidth;
    el.style.animation = "";
  });

  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  closeMenu();
}

/* ============================================================
   UI helpers
   ============================================================ */
const toast = document.getElementById("toast");
let toastTimer;

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add("toast--show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("toast--show"), 2800);
}

const navLinks = document.getElementById("navLinks");
const navToggle = document.getElementById("navToggle");

function closeMenu() {
  navLinks.classList.remove("open");
  navToggle.classList.remove("open");
}

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  navToggle.classList.toggle("open");
});

/* ============================================================
   Global click handling
   ============================================================ */
document.addEventListener("click", e => {
  // Discord buttons
  const discord = e.target.closest("[data-discord]");
  if (discord) {
    e.preventDefault();
    if (CONFIG.discordUrl) window.open(CONFIG.discordUrl, "_blank", "noopener");
    else showToast("Add your Discord invite in script.js (CONFIG.discordUrl)");
    return;
  }

  // Download buttons
  const dl = e.target.closest("[data-download]");
  if (dl) {
    e.preventDefault();
    const url = dl.dataset.url || CONFIG.downloadUrl;
    if (url) window.open(url, "_blank", "noopener");
    else showToast("Add your download link in script.js (CONFIG.downloadUrl)");
    return;
  }

  // Placeholder links
  const soon = e.target.closest("[data-soon]");
  if (soon) {
    e.preventDefault();
    showToast("This page is coming soon");
  }
});

/* ============================================================
   Cursor glow
   ============================================================ */
const glow = document.getElementById("cursorGlow");
let gx = 0, gy = 0, tx = 0, ty = 0;

document.addEventListener("mousemove", e => { tx = e.clientX; ty = e.clientY; });

(function loop() {
  gx += (tx - gx) * 0.12;
  gy += (ty - gy) * 0.12;
  glow.style.transform = `translate(${gx - 125}px, ${gy - 125}px)`;
  requestAnimationFrame(loop);
})();

/* ============================================================
   Boot
   ============================================================ */
renderCards();
window.addEventListener("hashchange", route);
route();

window.addEventListener("load", () => {
  setTimeout(() => document.getElementById("loader").classList.add("loader--done"), 500);
});
// Fallback if load already fired
setTimeout(() => document.getElementById("loader").classList.add("loader--done"), 2500);
