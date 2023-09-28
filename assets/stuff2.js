// edellinen ja seuraava
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById('custom-button');
    
    button.addEventListener('mouseover', () => {
        button.style.backgroundImage = 'linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(dark-background.jpg)';
    });
    
    button.addEventListener('mouseout', () => {
        button.style.backgroundImage = '';
    });
    });