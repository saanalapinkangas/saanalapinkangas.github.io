document.addEventListener("DOMContentLoaded", function () {

    var links = {
        "Facebook": "link.html",
        "Instagram": "linkki12.html",
        "GitHub": "linkki3.html",
        "LinkedIn": "linkki14.html",
        "Home": "link.html",
        "Portfolio": "link.html",
        "AboutMe": "link.html",
        "Contact": "link.html"
    };

    var facebookLink = document.getElementById("fb");
    var instagramLink = document.getElementById("insta");
    var githubLink = document.getElementById("github");
    var linkedinLink = document.getElementById("linkedin");
    var aloitusLink = document.getElementById("aloitus");
    var portfolioLink = document.getElementById("portfolio");
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