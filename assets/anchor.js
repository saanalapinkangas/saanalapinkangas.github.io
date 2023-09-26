// ankkurointi osa 1
// Etsi kaikki linkit, jotka viittaavat ankkureihin (#) ja lisää niihin vierityksen käsittelijä
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
    
            // Hae kohde-elementti ankkurista
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
    
            if (targetElement) {
                // Laske kohteen sijainti sivulla
                const targetOffset = targetElement.getBoundingClientRect().top;
    
                // Vieritä sivu haluttuun kohtaan
                window.scrollTo({
                    top: window.scrollY + targetOffset,
                    behavior: 'smooth' // Tämä luo sileän vierityksen
                });
            }
        });
    });
    });
    
    
    // ankkurointi osa 2
    // ankkurointi
    // Etsi kaikki linkit, jotka viittaavat ankkureihin (#) ja lisää niihin vierityksen käsittelijä
    document.addEventListener("DOMContentLoaded", function () {
        document.querySelectorAll('a[id$="-link"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
    
                // Hae kohde-elementti ankkurista
                const targetId = this.getAttribute('id').replace('-link', '');
                const targetElement = document.getElementById(targetId);
    
                if (targetElement) {
                    // Laske kohteen sijainti sivulla
                    const targetOffset = targetElement.getBoundingClientRect().top;
    
                    // Vieritä sivu haluttuun kohtaan
                    window.scrollTo({
                        top: window.scrollY + targetOffset,
                        behavior: 'smooth' // Tämä luo sileän vierityksen
                    });
                }
            });
        });
    });