// Haetaan tarvittavat elementit DOM:ista
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


document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
});