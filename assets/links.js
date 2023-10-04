document.addEventListener("DOMContentLoaded", function () {

    var links = {
        "Facebook": "https://www.facebook.com/saana.lapinkangas",
        "Instagram": "https://www.instagram.com/saanalapinkangas",
        "GitHub": "https://github.com/saanalapinkangas",
        "LinkedIn": "https://www.linkedin.com/in/saanalapinkangas",
        "Home": "#aloitus",
        "Portfolio": "#portfolio",
        "AboutMe": "aboutme.html",
        "Contact": "contact.html",
    };

    var facebookLink = document.getElementById("fb");
    var instagramLink = document.getElementById("insta");
    var githubLink = document.getElementById("github");
    var linkedinLink = document.getElementById("linkedin");
    var aloitusLink = document.getElementById("aloitus-link");
    var portfolioLink = document.getElementById("portfolio-link");
    var aboutMeLink = document.getElementById("aboutme");
    var contactLink = document.getElementById("contact");

    // Asetetaan linkkien osoitteet JavaScriptista
    facebookLink.href = links["Facebook"];
    instagramLink.href = links["Instagram"];
    githubLink.href = links["GitHub"];
    linkedinLink.href = links["LinkedIn"];
    aloitusLink.href = links["Home"];
    portfolioLink.href = links["Portfolio"];
    aboutMeLink.href = links["AboutMe"];
    contactLink.href = links["Contact"];

});