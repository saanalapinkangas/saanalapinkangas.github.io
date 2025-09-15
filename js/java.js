(function(){
const toggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');
const header = document.querySelector('header');


const setOpen = (open) => {
header.classList.toggle('is-open', open);
toggle.setAttribute('aria-expanded', String(open));
toggle.setAttribute('aria-label', open ? 'Sulje valikko' : 'Avaa valikko');
mobileMenu.hidden = !open; // keeps it out of tab order when closed
};


toggle.addEventListener('click', () => {
const open = toggle.getAttribute('aria-expanded') === 'false';
setOpen(open);
});


// Close when clicking a link or pressing Escape
mobileMenu.addEventListener('click', (e) => {
const target = e.target;
if(target instanceof Element && target.closest('a')) setOpen(false);
});


document.addEventListener('keydown', (e) => {
if(e.key === 'Escape') setOpen(false);
});


// Optional: close on viewport resize above breakpoint
const mql = window.matchMedia('(min-width: 801px)');
mql.addEventListener('change', (e) => { if(e.matches) setOpen(false); });
})();


// Intersection Observer animaatioon: alustetaan dynaamisesti reitityksen jälkeenkin
window.initGalleryReveal = function initGalleryReveal(){
  try {
    if (window.__galleryObserver) {
      window.__galleryObserver.disconnect();
    }

    const items = document.querySelectorAll('.item');
    if (!items.length) return; // ei mitään havainnoitavaa tällä sivulla

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });

    items.forEach(item => observer.observe(item));
    window.__galleryObserver = observer;
  } catch (e) {
    // no-op
  }
};

// Alusta myös suoran latauksen tapauksessa
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => window.initGalleryReveal());
} else {
  window.initGalleryReveal();
}
