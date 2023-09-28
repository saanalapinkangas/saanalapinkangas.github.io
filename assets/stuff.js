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


// edellinen ja seuraava
document.addEventListener("DOMContentLoaded", function () {
const button = document.getElementById('custom-button');

button.addEventListener('mouseover', () => {
    button.style.backgroundImage = 'linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(dark-background.jpg)';
});

button.addEventListener('mouseout', () => {
    button.style.backgroundImage = '';
});
});