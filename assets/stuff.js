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
