document.addEventListener("DOMContentLoaded", function () {

    var links = {
        "Facebook": "link.html",
        "Instagram": "linkki12.html",
        "GitHub": "linkki3.html",
        "LinkedIn": "linkki14.html",
        "Home": "#aloitus",
        "Portfolio": "#portfolio",
        "AboutMe": "link.html",
        "Contact": "#footer"
    };

    var facebookLink = document.getElementById("fb");
    var instagramLink = document.getElementById("insta");
    var githubLink = document.getElementById("git");
    var linkedinLink = document.getElementById("lin");
    var aloitusLink = document.getElementById("aloitus-link");
    var portfolioLink = document.getElementById("portfolio-link");
    var aboutMeLink = document.getElementById("aboutme");
    var contactLink = document.getElementById("contact-link");

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