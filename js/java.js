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

window.initPortfolioToggle = function initPortfolioToggle() {
  try {
    const appRoot = document.getElementById('app');
    if (!appRoot) return;

    const group = appRoot.querySelector('[data-portfolio-toggle-group]');
    if (!group) return;

    if (group.dataset.toggleInitialized === 'true') {
      return;
    }

    const buttons = Array.from(group.querySelectorAll('[data-portfolio-target]'));
    const sections = Array.from(appRoot.querySelectorAll('[data-portfolio-section]'));

    if (!buttons.length || !sections.length) return;

    const sectionIds = new Set(sections.map(section => section.id));

    let activeId = sections.find(section => !section.hidden && section.getAttribute('aria-hidden') !== 'true');
    activeId = activeId ? activeId.id : null;

    if (!activeId) {
      const firstButton = buttons[0];
      activeId = firstButton ? firstButton.getAttribute('data-portfolio-target') : null;
    }

    if (!activeId && sections[0]) {
      activeId = sections[0].id;
    }

    function showSection(targetId) {
      if (!targetId || !sectionIds.has(targetId)) {
        return;
      }

      sections.forEach(section => {
        const isActive = section.id === targetId;
        section.hidden = !isActive;
        section.setAttribute('aria-hidden', String(!isActive));
      });

      buttons.forEach(button => {
        const isActive = button.getAttribute('data-portfolio-target') === targetId;
        button.setAttribute('aria-pressed', String(isActive));
        button.classList.toggle('is-active', isActive);
      });

      activeId = targetId;

      if (typeof window.initGalleryReveal === 'function') {
        window.initGalleryReveal();
      }
    }

    buttons.forEach(button => {
      const targetId = button.getAttribute('data-portfolio-target');

      if (!sectionIds.has(targetId)) {
        button.disabled = true;
        return;
      }

      button.addEventListener('click', () => {
        if (activeId === targetId) return;
        showSection(targetId);
      });
    });

    showSection(activeId);

    group.dataset.toggleInitialized = 'true';
  } catch (e) {
    // no-op
  }
};

window.initPortfolioLightbox = function initPortfolioLightbox() {
  try {
    const galleries = Array.from(document.querySelectorAll('[data-lightbox-gallery]'));
    if (!galleries.length) return;

    let overlay = document.getElementById('portfolioLightbox');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'portfolioLightbox';
      overlay.className = 'portfolio-lightbox';
      overlay.hidden = true;
      overlay.setAttribute('aria-hidden', 'true');
      overlay.setAttribute('role', 'dialog');
      overlay.setAttribute('aria-modal', 'true');
      overlay.innerHTML = [
        '<figure class="portfolio-lightbox__figure">',
        '  <img src="" alt="" loading="lazy" />',
        '  <figcaption class="portfolio-lightbox__caption"></figcaption>',
        '</figure>'
      ].join('');
      document.body.appendChild(overlay);
    }

    const overlayImage = overlay.querySelector('img');
    const overlayCaption = overlay.querySelector('figcaption');

    if (!overlayImage || !overlayCaption) {
      return;
    }

    const closeLightbox = () => {
      if (overlay.hidden) return;
      overlay.hidden = true;
      overlay.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('has-portfolio-lightbox');
      document.removeEventListener('keydown', onKeyDown);
    };

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeLightbox();
      }
    };

    if (!overlay.dataset.bound) {
      overlay.addEventListener('click', () => {
        closeLightbox();
      });
      overlay.dataset.bound = 'true';
    }

    const openLightbox = (image, captionText) => {
      overlayImage.src = image.currentSrc || image.src;
      overlayImage.alt = image.alt || '';
      overlayCaption.textContent = captionText || '';
      overlay.hidden = false;
      overlay.setAttribute('aria-hidden', 'false');
      document.body.classList.add('has-portfolio-lightbox');
      document.addEventListener('keydown', onKeyDown);
    };

    galleries.forEach(gallery => {
      if (gallery.dataset.lightboxInitialized === 'true') {
        return;
      }

      gallery.addEventListener('click', (event) => {
        const rawTarget = event.target;
        if (!(rawTarget instanceof Element)) {
          return;
        }

        const trigger = rawTarget.closest('[data-lightbox-item], img');
        if (!trigger) {
          return;
        }

        const targetImage = trigger instanceof HTMLImageElement
          ? trigger
          : trigger.querySelector('img');

        if (!(targetImage instanceof HTMLImageElement)) {
          return;
        }

        const skip = trigger.closest('[data-lightbox-disabled]');
        if (skip) {
          return;
        }

        event.preventDefault();

        const figure = targetImage.closest('figure');
        const caption = figure ? figure.querySelector('figcaption') : null;
        const captionText = caption ? caption.textContent.trim() : (targetImage.alt || '');

        openLightbox(targetImage, captionText);
      });

      gallery.dataset.lightboxInitialized = 'true';
    });
  } catch (e) {
    // no-op
  }
};

// Alusta myös suoran latauksen tapauksessa
const runInitializers = () => {
  if (typeof window.initGalleryReveal === 'function') {
    window.initGalleryReveal();
  }
  if (typeof window.initPortfolioToggle === 'function') {
    window.initPortfolioToggle();
  }
  if (typeof window.initPortfolioLightbox === 'function') {
    window.initPortfolioLightbox();
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', runInitializers);
} else {
  runInitializers();
}
