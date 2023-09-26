// stuff.js

// etusivun nuolen animaatio
function animateArrow() {
    const bounceElement = document.querySelector(".bounce");
    let direction = 1; // Alustetaan liikkeen suunta

    function animateArrow() {
        let currentBottom = parseFloat(getComputedStyle(bounceElement).bottom);

        if (currentBottom >= 30) {
            direction = -1;
        } else if (currentBottom <= 0) {
            direction = 1;
        }

        const newBottom = currentBottom + direction * 0.8; // Liikkeen nopeus
        bounceElement.style.bottom = newBottom + "px";
    }

    setInterval(animateArrow, 1000 / 60); // Kutsu animateArrow-funktiota 60 kertaa sekunnissa
};

// lisää gallerian aktiivisuus > kun mouseOver, ilmestyy kuvan tiedot näkyviin
document.addEventListener("DOMContentLoaded", function () {
    const kuvainfoElements = document.querySelectorAll('.kuvainfo');

    kuvainfoElements.forEach((kuvainfo) => {
        const parent = kuvainfo.parentElement;

        // Kun hiiri menee kuvan päälle (hover)
        parent.addEventListener('mouseenter', () => {
            kuvainfo.style.display = 'block';
        });

        // Kun hiiri poistuu kuvan päältä
        parent.addEventListener('mouseleave', () => {
            kuvainfo.style.display = 'none';
        });
    });
});


// navigaatio
document.addEventListener("DOMContentLoaded", function () {
    const navigaatio = document.getElementById("navigaatio");
    const aloitus = document.querySelector(".aloitus");

    // Lisää event listener sivun skrollaukselle
    window.addEventListener("scroll", function () {
        // Tarkista, onko aloitus-div ohitettu
        const aloitusRect = aloitus.getBoundingClientRect();
        if (aloitusRect.bottom <= 0) {
            // Näytä navigaatiopalkki
            navigaatio.style.top = "0";
        } else {
            // Piilota navigaatiopalkki
            navigaatio.style.top = "-70px";
        }
    });
});


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

