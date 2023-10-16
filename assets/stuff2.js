// Kielenvaihto-nappi

document.addEventListener("DOMContentLoaded", function () {

    // Haetaan tarvittavat elementit DOM:ista
    const tekstit = document.querySelectorAll(".vaihdettavaTxt"); // Valitse kaikki tekstit

    // Haetaan nappi DOM:ista
    const vaihdaNappi = document.getElementById("vaihdaNappi");

    // Lisätään nappiin klikkikuuntelija
    vaihdaNappi.addEventListener("click", () => {

        // Käydään läpi kaikki tekstit ja vaihdetaan niiden näkyvyyttä
        tekstit.forEach((tekstiElementti) => {
            if (tekstiElementti.classList.contains("nayta")) {
                tekstiElementti.classList.remove("nayta");
                tekstiElementti.classList.add("piilossa");
            } else {
                tekstiElementti.classList.remove("piilossa");
                tekstiElementti.classList.add("nayta");
            }
        });
    });
});


// About me kuvan vaihto

window.addEventListener('DOMContentLoaded', (event) => {
    const suuriKuva = document.getElementById('suuriKuva');
    const pieniKuva = document.getElementById('pieniKuva');

    const mediaQuery = window.matchMedia('(max-width: 768px)'); /* Vastaava media query kuin CSS:ssä */

    function vaihdaKuva(event) {
        if (event.matches) {
            suuriKuva.style.display = 'none';
            pieniKuva.style.display = 'block';
        } else {
            suuriKuva.style.display = 'block';
            pieniKuva.style.display = 'none';
        }
    }

    // Kutsutaan vaihdaKuva-funktiota alussa ja lisätään kuuntelija, joka reagoi muutoksiin näytössä.
    vaihdaKuva(mediaQuery);
    mediaQuery.addEventListener('change', vaihdaKuva);
});
