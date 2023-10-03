document.addEventListener("DOMContentLoaded", function () {

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("modalImg");
var captionText = document.getElementById("caption");
var galleryImages = document.querySelectorAll(".galleria img");

// Funktio, joka avaa modalin ja asettaa kuvan ja tekstin
function openModal(imgElement) {
    modal.style.display = "block";
    modalImg.src = imgElement.src;
    captionText.innerHTML = imgElement.alt;
}

// Klikkauksen kuuntelija kuvan avaamiseksi galleriasta
galleryImages.forEach(function (imgElement) {
    imgElement.onclick = function () {
        openModal(imgElement);
    }
});

// Klikkauksen kuuntelija modalin sulkemiseksi
modal.onclick = function() {
    modal.style.display = "none";
};
});