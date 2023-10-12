document.addEventListener("DOMContentLoaded", function () {

    var links = {
        "Facebook": "https://www.facebook.com/saana.lapinkangas",
        "FacebookFooter": "https://www.facebook.com/saana.lapinkangas",
        "Instagram": "https://www.instagram.com/saanalapinkangas",
        "InstagramFooter": "https://www.instagram.com/saanalapinkangas",
        "GitHub": "https://github.com/saanalapinkangas",
        "GitHubFooter": "https://github.com/saanalapinkangas",
        "LinkedIn": "https://www.linkedin.com/in/saanalapinkangas",
        "LinkedInFooter": "https://www.linkedin.com/in/saanalapinkangas",
        "Home": "index.html",
        "Portfolio": "index.html",
        "AboutMe": "aboutme.html",
        "Contact": "contact.html"
    };

    var facebookLink = document.getElementById("fb");
    var facebookFooterLink = document.getElementById("fb-footer");
    var instagramLink = document.getElementById("insta");
    var instagramFooterLink = document.getElementById("insta-footer");
    var githubLink = document.getElementById("github");
    var githubLinkFooter = document.getElementById("github-footer");
    var linkedinLink = document.getElementById("linkedin");
    var linkedinFooterLink = document.getElementById("linkedin-footer");
    var aloitusLink = document.getElementById("aloitus");
    var portfolioLink = document.getElementById("portfolio");
    var aboutMeLink = document.getElementById("aboutme");
    var contactLink = document.getElementById("contact");

    // Asetetaan linkkien osoitteet JavaScriptista
    facebookLink.href = links["Facebook"];
    facebookFooterLink.href = links["FacebookFooter"];
    instagramLink.href = links["Instagram"];
    instagramFooterLink.href = links["InstagramFooter"];
    githubLink.href = links["GitHub"];
    githubLinkFooter.href = links["GitHubFooter"];
    linkedinLink.href = links["LinkedIn"];
    linkedinFooterLink.href = links["LinkedInFooter"];
    aloitusLink.href = links["Home"];
    portfolioLink.href = links["Portfolio"];
    aboutMeLink.href = links["AboutMe"];
    contactLink.href = links["Contact"];

});