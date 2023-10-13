// Puhdista lomakkeen kentät lähetyksen jälkeen
window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
      form.reset();
    }
  }