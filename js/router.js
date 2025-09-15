const routes = {
    "": "home",
    "/": "home",
    "/info": "info",
    "/galleria": "galleria",
  };
  
  const app = document.getElementById("app");
  
  async function fetchPartial(name) {
    // Yritä hakea erillisestä tiedostosta (toimii http(s):llä)
    try {
      const res = await fetch(`pages/${name}.html`, { cache: "no-cache" });
      if (!res.ok) throw new Error(res.statusText);
      return await res.text();
    } catch (err) {
      // Jos ollaan file://-tilassa tai haku epäonnistui, käytä <template>-fallbackia
      const tpl = document.getElementById(`tpl-${name}`);
      if (tpl) return tpl.innerHTML.trim();
      // Perustason 404
      return `<h1>404</h1><p>Sivua ei löytynyt.</p>`;
    }
  }
  
  function currentPath() {
    const hash = location.hash.replace(/^#/, "");
    return routes[hash] ?? "home";
  }
  
  function updateActiveNav() {
    const current = location.hash.replace(/^#/, "") || "/";
    document.querySelectorAll("nav a").forEach(a => {
      const target = a.getAttribute("href").replace(/^#/, "");
      a.classList.toggle("active", target === current);
    });
  }
  
  function updateTitle() {
    const h1 = app.querySelector("h1");
    if (h1) document.title = `${h1.textContent} — Portfolio`;
  }
  
  async function render() {
    const name = currentPath();
    app.innerHTML = await fetchPartial(name);
    updateActiveNav();
    updateTitle();
    window.scrollTo({ top: 0, behavior: "instant" });
  }
  
  window.addEventListener("hashchange", render);
  window.addEventListener("DOMContentLoaded", render);
  