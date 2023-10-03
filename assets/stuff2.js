// Kielenvaihto-nappi
document.addEventListener("DOMContentLoaded", function () {

// Haetaan tarvittavat elementit DOM:ista
const vanhaTekstiElementti = document.getElementById("vanhaTeksti");
const uusiTekstiElementti = document.getElementById("uusiTeksti");
const vaihdaNappi = document.getElementById("vaihdaNappi");

// Lisätään nappiin klikkikuuntelija
vaihdaNappi.addEventListener("click", () => {
    // Tarkistetaan, kumpi teksti näytetään ja kumpi piilotetaan
    if (vanhaTekstiElementti.classList.contains("nayta")) {
        vanhaTekstiElementti.classList.remove("nayta");
        vanhaTekstiElementti.classList.add("piilossa");
        uusiTekstiElementti.classList.remove("piilossa");
        uusiTekstiElementti.classList.add("nayta");
    } else {
        uusiTekstiElementti.classList.remove("nayta");
        uusiTekstiElementti.classList.add("piilossa");
        vanhaTekstiElementti.classList.remove("piilossa");
        vanhaTekstiElementti.classList.add("nayta");
    }
});
});