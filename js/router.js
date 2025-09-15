const routes = {
    "": "home",         // "#/" tai tyhjä -> home.html
    "/": "home",
    "/info": "info",
    "/portfolio": "portfolio",
  };
  
  const app = document.getElementById("app");
  
  async function loadPartial(name) {
    try {
      const res = await fetch(`pages/${name}.html`, { cache: "no-cache" });
      if (!res.ok) throw new Error(res.statusText);
      const html = await res.text();
      app.innerHTML = html;
      updateActiveNav();
      updateTitleFromH1();
      // Alusta sivukohtaiset efektit (esim. gallerian IntersectionObserver)
      if (typeof window.initGalleryReveal === 'function') {
        window.initGalleryReveal();
      }
      window.scrollTo({ top: 0, behavior: "instant" });
    } catch (e) {
      app.innerHTML = `<h1>404</h1><p>Sivua ei löytynyt.</p>`;
    }
  }
  
  function parseRoute() {
    const hash = location.hash.replace(/^#/, ""); // esim. "/about"
    return routes[hash] ?? null;
  }
  
  function updateActiveNav() {
    const links = document.querySelectorAll("nav a");
    links.forEach(a => {
      const target = a.getAttribute("href").replace(/^#/, "");
      const current = location.hash.replace(/^#/, "") || "/";
      a.classList.toggle("active", target === current);
    });
  }
  
  function updateTitleFromH1() {
    const h1 = app.querySelector("h1");
    if (h1) document.title = `${h1.textContent} — Oma portfolio`;
  }
  
  function onRouteChange() {
    const page = parseRoute();
    loadPartial(page || "home");
  }
  
  window.addEventListener("hashchange", onRouteChange);
  window.addEventListener("DOMContentLoaded", onRouteChange);
  
