const routes = {
    "": "home",         // "#/" tai tyhjä -> home.html
    "/": "home",
    "/info": "info",
    "/portfolio": "portfolio",
  };
  
  const projectPages = [
    { slug: "example", title: "Taide 2" },
    { slug: "example-2", title: "Example-projekti 2" },
    { slug: "example-3", title: "Taide3" },
  ];
  
  const app = document.getElementById("app");
  
  async function loadPartial(name) {
    try {
      const res = await fetch(`pages/${name}.html`, { cache: "no-cache" });
      if (!res.ok) throw new Error(res.statusText);
      const html = await res.text();
      app.innerHTML = html;
      if (name && name.startsWith("projects/")) {
        const slug = name.split("/")[1];
        injectProjectNavigation(slug);
      }
      updateActiveNav();
      updateTitleFromH1();
      // Alusta sivukohtaiset efektit (esim. gallerian IntersectionObserver)
      if (typeof window.initGalleryReveal === 'function') {
        window.initGalleryReveal();
      }
      if (typeof window.initPortfolioToggle === 'function') {
        window.initPortfolioToggle();
      }
      window.scrollTo({ top: 0, behavior: "instant" });
    } catch (e) {
      app.innerHTML = `<h1>404</h1><p>Sivua ei löytynyt.</p>`;
    }
  }
  
  function parseRoute() {
    const hash = location.hash.replace(/^#/, ""); // esim. "/portfolio/example"
    // 1) Suora osuma staattisiin reitteihin
    if (routes[hash]) return routes[hash];
    // 2) Dynaaminen projekti: "/portfolio/:slug"
    const m = hash.match(/^\/portfolio\/([a-z0-9-]+)$/i);
    if (m) return `projects/${m[1]}`; // lataa pages/projects/:slug.html
    return null;
  }
  
  function injectProjectNavigation(slug) {
    const nav = app.querySelector(".project-nav");
    if (!nav) return;

    const index = projectPages.findIndex(project => project.slug === slug);
    if (index === -1) {
      nav.innerHTML = "";
      return;
    }

    nav.innerHTML = "";

    const prev = projectPages[index - 1];
    if (prev) {
      const prevLink = document.createElement("a");
      prevLink.href = `#/portfolio/${prev.slug}`;
      prevLink.textContent = `← ${prev.title}`;
      nav.appendChild(prevLink);
    }

    const next = projectPages[index + 1];
    if (next) {
      const nextLink = document.createElement("a");
      nextLink.href = `#/portfolio/${next.slug}`;
      nextLink.textContent = `${next.title} →`;
      nav.appendChild(nextLink);
    }
  }
  
  function updateActiveNav() {
    const links = document.querySelectorAll("nav a");
    const current = location.hash.replace(/^#/, "") || "/";
    links.forEach(a => {
      const target = a.getAttribute("href").replace(/^#/, "");
      let isActive = false;
      if (target === "/") {
        isActive = current === "/";
      } else if (target === "/portfolio") {
        isActive = current === "/portfolio" || current.startsWith("/portfolio/");
      } else {
        isActive = target === current;
      }
      a.classList.toggle("active", isActive);
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
  
