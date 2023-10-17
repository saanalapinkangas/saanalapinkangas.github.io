<p align=center>
  <picture><img src="https://raw.githubusercontent.com/saanalapinkangas/saanalapinkangas.github.io/main/images/files/readme.png" width="100%"></picture>
</p>

<p align=center># PORTFOLIO</p>
<p align=center>
  <a href=https://saanalapinkangas.github.io/index.html>PORTFOLIO</a></p>

<p align=center>## WEB-SOVELLUSTEN PERUSTEET (5 OP)</p>
<p align=center>Tehtävänä on luoda web-sivusto, jossa hyödynnetty kurssilla käytyjä asioita.</p>

<p align=center>Valitsin tehtäväksi oman portfolioni</p>

Alle on listattu esimerkkejä, joissa halutut ominaisuudet on nähtävillä.
</p>

## HTML
- Sivusto täyttää kaikki 5 kohtaa:
  - perus html-rakenne
  - selkeästi erotellut osiot ja sisällöt
  - linkkien, median ja lomakkeen käyttöä
  - [taulukko-näkymä luotu erilliselle sivulle](https://saanalapinkangas.github.io/deletelater.html)
  - fiksusti rakennettu rakenne `<div>, <footer>, <form>`
- [Etusivun ja portfolion HTML](https://github.com/saanalapinkangas/saanalapinkangas.github.io/blob/7bd7437a5842e2f438e6c35103d1927ab79d7c4c/index.html)
- [About me -sivun HTML](https://github.com/saanalapinkangas/saanalapinkangas.github.io/blob/7bd7437a5842e2f438e6c35103d1927ab79d7c4c/aboutme.html)
- [Portfolion mallisivu](https://github.com/saanalapinkangas/saanalapinkangas.github.io/blob/7bd7437a5842e2f438e6c35103d1927ab79d7c4c/brand_lapinkettu.html)

## CSS
- Sivusto täyttää kaikki 5 CSS-osiota:
  - perus css-tyylittely (värit, fontit)
  - luokkien ja id:n käyttö
  - responsiivisuus
  - käytössä float
  - tyylittelyn käyttö käyttäjäystävällisyyden hyväksi
- [Etusivun CSS](https://github.com/saanalapinkangas/saanalapinkangas.github.io/blob/7bd7437a5842e2f438e6c35103d1927ab79d7c4c/assets/style.css)
- [Muiden sivujen CSS](https://github.com/saanalapinkangas/saanalapinkangas.github.io/blob/7bd7437a5842e2f438e6c35103d1927ab79d7c4c/assets/stylePages.css)

## Osa 3: JavaScript
### 1/5 Simple interactions
- Tapahtumankäsittelijä, joka reagoi klikkaukseen avaamalla kuvat uudessa ikkunassa (modaali). Jokainen portfolion esittelykuva avautuu näin. [modal.js](https://github.com/saanalapinkangas/saanalapinkangas.github.io/blob/42fd03c13a83a9d8f563c4d80f2d7156104e624b/assets/modal.js)
- Etusivun linkit ovat sivun sisäisiä ankkurilinkkejä, jotka siirtyvät pehmeästi haluttuun kohtaan sivulla (esim. portfoliosta siirtyminen etusivun kuvaan). [navigaatio](https://github.com/saanalapinkangas/saanalapinkangas.github.io/blob/42fd03c13a83a9d8f563c4d80f2d7156104e624b/assets/stuff.js)

### 2/5 Multiple event listeners and basic DOM manipulations
- Sivulla on useita tapahtumankuuntelijoita, jotka reagoivat hiiren liikkeisiin ja kosketuksiin. Yllä mainituissa modaalissa ja siirtymisissä on kuuntelijat, samoin portfolion kuvien infotekstien esiintymisessä [gallerian_aktiivisuus.js](https://github.com/saanalapinkangas/saanalapinkangas.github.io/blob/42fd03c13a83a9d8f563c4d80f2d7156104e624b/assets/stuff.js).
- Useissa koodeissa tehdään DOM-manipulaatiota kuten elementtien hakeminen, niiden ominaisuuksien muuttaminen ja näkyvyyden hallinta.
  - Navigaation ja sosiaalisen median linkit on määritelty JS:ssä käytännöllisyyden vuoksi. Ne haetaan DOM:ista ja asetetaan uudet osoitteet. [links.js](https://github.com/saanalapinkangas/saanalapinkangas.github.io/blob/42fd03c13a83a9d8f563c4d80f2d7156104e624b/assets/links.js)
  - Kielenvaihto-nappi vaihtaa tekstien näkyvyyttä klikkauksen perusteella englannista suomeksi ja takaisin. Nappiin on liitetty tapahtumakuuntelija ja DOM. [stuff2.js](https://github.com/saanalapinkangas/saanalapinkangas.github.io/blob/42fd03c13a83a9d8f563c4d80f2d7156104e624b/assets/stuff2.js)
 
### 3/5 Use of arrays, objects, and functions
- Slideshow-elementissä käytetään useita funktioita (plusSlides, currentSlide, showSlides) jotka käsittelevät diaesityksen liikkumista ja ominaisuuksia. Lisäksi käytetään taulukkoa "dots"-pisteiden kuuntelijoiden asettamiseksi, joilla voi siirtyä mihin tahansa kuvaan diaesityksessä. [slideshow.js](https://github.com/saanalapinkangas/saanalapinkangas.github.io/blob/42fd03c13a83a9d8f563c4d80f2d7156104e624b/assets/slideshow.js)
- Navigaation ja sosiaalisen median linkkien määrittelyissä käytetään objekteja ("links") tallentamaan linkkien osoitteet. [links.js](https://github.com/saanalapinkangas/saanalapinkangas.github.io/blob/42fd03c13a83a9d8f563c4d80f2d7156104e624b/assets/links.js)

### 4/5 Advanced logic, looping through data, and dynamic DOM updates
- Ankkuroidut linkit käyttävät monimutkaista ohjauslogiikkaa, kun ne etsivät kaikki ankkuroihin viittaavat linkit ja lisäävät niihin vierityksen käsittelijän. Dynaaminen DOM-päivitys muuntaa sivulla siirtymisen pehmeäksi. [anchor.js](https://github.com/saanalapinkangas/saanalapinkangas.github.io/blob/42fd03c13a83a9d8f563c4d80f2d7156104e624b/assets/anchor.js)
- Slideshow käyttää edistynyttä logiikkaa seuraamalla nykyistä diaa ja päivittämällä sivyn dynaamisesti diashown perusteella. Kuvaa vaihtavat pisteet vaativat datan läpikäyntiä. [slideshow.js](https://github.com/saanalapinkangas/saanalapinkangas.github.io/blob/42fd03c13a83a9d8f563c4d80f2d7156104e624b/assets/slideshow.js)

### 5/5 Consistent use of Object-Oriented JavaScript principles
- Modaalissa käytetään muuttujia (esim. modal, modalImg, captionText), jotka toimivat olioina. Niiden avulla hallitaan modaalin toiminnallisuutta, kuten näkyvyyden asettamista ja kuvien näyttämistä sekä sulkemista.[modal.js](https://github.com/saanalapinkangas/saanalapinkangas.github.io/blob/42fd03c13a83a9d8f563c4d80f2d7156104e624b/assets/modal.js)
- Navigaation ja sosiaalisen median linkit on määritelty links-objektille. Niitä hallitaan olioperiaatteen mukaisesti käyttämällä document.getElementById-metodia jokaisen linkin hakemiseen ja muuttujat (facebookLink, instagramLink) toimivat linkkien objekteina. Linkkien url-osoitteet päivitetään objektien perusteella. [links.js](https://github.com/saanalapinkangas/saanalapinkangas.github.io/blob/42fd03c13a83a9d8f563c4d80f2d7156104e624b/assets/links.js)

## Osa 4 Asynchronous Operations
### 1/5 Use of timers
- Etusivun pomppivassa nuolessa on ajastus, joka luo animaatiolle liikkeentunnun. Koodi `setInterval(animateArrow, 1000/60);` [stuff.js](https://github.com/saanalapinkangas/saanalapinkangas.github.io/blob/42fd03c13a83a9d8f563c4d80f2d7156104e624b/assets/stuff.js)

### 2/5 Successful implementation of an AJAX call or Fetch
- Erillinen sivu luotu Fetchin käyttöön, koska sitä ei saatu sopimaan portfolion sisältöön järkevästi. Sivulla haetaan dokumentti, jonka sisältö korvaa sivulla olevan tekstin. [Mallisivu Fetchille](https://saanalapinkangas.github.io/deletelater.html), [javascript](https://github.com/saanalapinkangas/saanalapinkangas.github.io/blob/42fd03c13a83a9d8f563c4d80f2d7156104e624b/deletelater.html)

### 3/5 Data from the asynchronous call is displayed on the webpage
- Useat sivun ominaisuudet toimivat asynkronisesti, eli tiedot haetaan tai päivitetään ilman sivun uudelleenlatausta.
  - Modaalisten ikkunoiden avaukset [modal.js](https://github.com/saanalapinkangas/saanalapinkangas.github.io/blob/42fd03c13a83a9d8f563c4d80f2d7156104e624b/assets/modal.js)
  - Kielenvaihto-nappi, tekstien vaihto englannista suomeksi [kielenvaihtonappi.js](https://github.com/saanalapinkangas/saanalapinkangas.github.io/blob/42fd03c13a83a9d8f563c4d80f2d7156104e624b/assets/stuff2.js)

### 4/5 Error handling is implemented (for failed API calls, etc.)
- Erillinen sivu luotu ongelmatilanteiden hoitamiseen, koska sitä ei saatu sopimaan portfolion sisältöön järkevästi. Sivulla haetaan dokumentti, jota ei löydy. [Mallisivu ongelmankäsittelylle](https://saanalapinkangas.github.io/deletelater.html), [javascript](https://github.com/saanalapinkangas/saanalapinkangas.github.io/blob/42fd03c13a83a9d8f563c4d80f2d7156104e624b/deletelater.html)

### 5/5 Effective use of asynchronous data to enhance user experience (like filtering, sorting)
- Sivulla ei ole mitään suurta ja näyttävää toimintoa tähän ominaisuuteen, mutta useita pienempiä osia. Aikaisemmassa osassa (3/5) mainitut modaalinen ikkuna ja kielenvaihto-nappi pyrkivät käyttäjäkokemuksen parantamiseen ja vuorovaikutukseen. Myös useat pehmeät, asyknroniset siirtymät (esim. ankkuroinnit, [portfolion infotekstien ilmestyminen](https://saanalapinkangas.github.io/index.html), slideshow) pyrkivät miellyttämään käyttäjää.
