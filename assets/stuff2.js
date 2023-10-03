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