<p align=center>
  <picture><img src="https://raw.githubusercontent.com/saanalapinkangas/saanalapinkangas.github.io/main/images/files/readme.png" width="100%"></picture>
</p>

<p align=center>
  <a href=https://saanalapinkangas.github.io/index.html>PORTFOLIO</a> 	&nbsp; | &nbsp; <a href=https://saanalapinkangas.github.io/aboutme.html>ABOUT ME</a> &nbsp; | &nbsp; <a href=https://saanalapinkangas.github.io/contact.html>CONTACT</a></p>
  
<h2>PORTFOLIO</h2>

:small_orange_diamond: &nbsp; Kurssi: WEB-sovellusten perusteet (5 OP), Oulun Ammattikorkeakoulu syksy 2023

:small_orange_diamond: &nbsp; Tehtävänanto: Luo web-sivusto, jossa hyödynnetty kurssilla käytyjä asioita (HTML, CSS, JavaScript)

:small_orange_diamond: &nbsp; Selvitys työstä: Valitsin tehtäväksi oman portfolioni. Sivusto koostuu etusivun ja portfolio-gallerian yhdistelmästä, esittelysivusta ja yhteystiedoista. Portfolion tarkoitus on jäädä pysyvään käyttöön ja toimia myöhemmin apuna harjoittelupaikkojen ja työn saannissa.

:small_orange_diamond: &nbsp; <a href=https://saanalapinkangas.github.io/index.html>Linkki portfolioon</a>


##	HTML
- Sivusto täyttää kaikki 5 kohtaa:
  - perus html-rakenne
  - selkeästi erotellut osiot ja sisällöt
  - linkkien, median ja lomakkeen käyttöä
  - [taulukko-näkymä luotu erilliselle sivulle](https://saanalapinkangas.github.io/deletelater.html)
  - fiksusti rakennettu rakenne `<div>, <footer>, <form>`
- [Etusivun ja portfolion HTML-koodit](https://github.com/saanalapinkangas/saanalapinkangas.github.io/blob/7bd7437a5842e2f438e6c35103d1927ab79d7c4c/index.html)
- [About me -sivun HTML-koodit](https://github.com/saanalapinkangas/saanalapinkangas.github.io/blob/7bd7437a5842e2f438e6c35103d1927ab79d7c4c/aboutme.html)
- [Portfolion sisältösivun HTML-koodit](https://github.com/saanalapinkangas/saanalapinkangas.github.io/blob/7bd7437a5842e2f438e6c35103d1927ab79d7c4c/brand_lapinkettu.html)
&nbsp;

## 	CSS
- Sivusto täyttää kaikki 5 CSS-osiota:
  - perus css-tyylittely (värit, fontit)
  - luokkien ja id:n käyttö
  - responsiivisuus
  - käytössä float
  - tyylittelyn käyttö käyttäjäystävällisyyden hyväksi
- [Etusivun CSS-koodit](https://github.com/saanalapinkangas/saanalapinkangas.github.io/blob/7bd7437a5842e2f438e6c35103d1927ab79d7c4c/assets/style.css)
- [Muiden sivujen CSS-koodit](https://github.com/saanalapinkangas/saanalapinkangas.github.io/blob/7bd7437a5842e2f438e6c35103d1927ab79d7c4c/assets/stylePages.css)
&nbsp;


## 	JavaScript
**1/5 Simple interactions**
- Tapahtumankäsittelijä, joka reagoi klikkaukseen avaamalla kuvat uudessa ikkunassa (modaali). Jokainen portfolion esittelykuva avautuu näin, [esimerkiksi nämä](https://saanalapinkangas.github.io/illustr_thesis.html). -- [modal.js](https://github.com/saanalapinkangas/saanalapinkangas.github.io/blob/42fd03c13a83a9d8f563c4d80f2d7156104e624b/assets/modal.js)
- Etusivun linkit ovat sivun sisäisiä ankkurilinkkejä, jotka siirtyvät pehmeästi haluttuun kohtaan sivulla (esim. portfoliosta siirtyminen etusivun kuvaan). -- [navigaatio.js](https://github.com/saanalapinkangas/saanalapinkangas.github.io/blob/42fd03c13a83a9d8f563c4d80f2d7156104e624b/assets/stuff.js)

&nbsp; 
**2/5 Multiple event listeners and basic DOM manipulations**
- Sivulla on useita tapahtumankuuntelijoita, jotka reagoivat hiiren liikkeisiin ja kosketuksiin. Yllä mainituissa modaalissa ja siirtymisissä on kuuntelijat, samoin [portfolion kuvien infotekstien esiintymisessä.](https://saanalapinkangas.github.io/index.html) 
 -- [gallerian_aktiivisuus.js](https://github.com/saanalapinkangas/saanalapinkangas.github.io/blob/42fd03c13a83a9d8f563c4d80f2d7156104e624b/assets/stuff.js).
- Useissa koodeissa tehdään DOM-manipulaatiota kuten elementtien hakeminen, niiden ominaisuuksien muuttaminen ja näkyvyyden hallinta.
  - Navigaation ja sosiaalisen median linkit on määritelty JS:ssä käytännöllisyyden vuoksi. Ne haetaan DOM:ista ja asetetaan uudet osoitteet. -- [links.js](https://github.com/saanalapinkangas/saanalapinkangas.github.io/blob/42fd03c13a83a9d8f563c4d80f2d7156104e624b/assets/links.js)
  - [Kielenvaihto-nappi](https://saanalapinkangas.github.io/gd_lapinyliopisto.html) vaihtaa tekstien näkyvyyttä klikkauksen perusteella englannista suomeksi ja takaisin. Nappiin on liitetty tapahtumakuuntelija ja DOM. -- [stuff2.js](https://github.com/saanalapinkangas/saanalapinkangas.github.io/blob/42fd03c13a83a9d8f563c4d80f2d7156104e624b/assets/stuff2.js)

&nbsp;  
**3/5 Use of arrays, objects, and functions**
- [Slideshow-elementissä](https://saanalapinkangas.github.io/gd_lapinyliopisto.html) käytetään useita funktioita (plusSlides, currentSlide, showSlides) jotka käsittelevät diaesityksen liikkumista ja ominaisuuksia. Lisäksi käytetään taulukkoa "dots"-pisteiden kuuntelijoiden asettamiseksi, joilla voi siirtyä mihin tahansa kuvaan diaesityksessä. -- [slideshow.js](https://github.com/saanalapinkangas/saanalapinkangas.github.io/blob/42fd03c13a83a9d8f563c4d80f2d7156104e624b/assets/slideshow.js)
- Navigaation ja sosiaalisen median linkkien määrittelyissä käytetään objekteja ("links") tallentamaan linkkien osoitteet. -- [links.js](https://github.com/saanalapinkangas/saanalapinkangas.github.io/blob/42fd03c13a83a9d8f563c4d80f2d7156104e624b/assets/links.js)

 
**4/5 Advanced logic, looping through data, and dynamic DOM updates**
- Ankkuroidut linkit käyttävät monimutkaista ohjauslogiikkaa, kun ne etsivät kaikki ankkuroihin viittaavat linkit ja lisäävät niihin vierityksen käsittelijän. Dynaaminen DOM-päivitys muuntaa sivulla siirtymisen pehmeäksi. -- [anchor.js](https://github.com/saanalapinkangas/saanalapinkangas.github.io/blob/42fd03c13a83a9d8f563c4d80f2d7156104e624b/assets/anchor.js)
- Slideshow käyttää edistynyttä logiikkaa seuraamalla nykyistä diaa ja päivittämällä sivyn dynaamisesti diashown perusteella. Kuvaa vaihtavat pisteet vaativat datan läpikäyntiä. -- [slideshow.js](https://github.com/saanalapinkangas/saanalapinkangas.github.io/blob/42fd03c13a83a9d8f563c4d80f2d7156104e624b/assets/slideshow.js)

**5/5 Consistent use of Object-Oriented JavaScript principles**
- Modaalissa käytetään muuttujia (esim. modal, modalImg, captionText), jotka toimivat olioina. Niiden avulla hallitaan modaalin toiminnallisuutta, kuten näkyvyyden asettamista ja kuvien näyttämistä sekä sulkemista. -- [modal.js](https://github.com/saanalapinkangas/saanalapinkangas.github.io/blob/42fd03c13a83a9d8f563c4d80f2d7156104e624b/assets/modal.js)
- Navigaation ja sosiaalisen median linkit on määritelty links-objektille. Niitä hallitaan olioperiaatteen mukaisesti käyttämällä document.getElementById-metodia jokaisen linkin hakemiseen ja muuttujat (facebookLink, instagramLink) toimivat linkkien objekteina. Linkkien url-osoitteet päivitetään objektien perusteella. -- [links.js](https://github.com/saanalapinkangas/saanalapinkangas.github.io/blob/42fd03c13a83a9d8f563c4d80f2d7156104e624b/assets/links.js)



## 	Asynchronous Operations
**1/5 Use of timers**
- [Etusivun pomppivassa nuolessa](https://saanalapinkangas.github.io/index.html) on ajastus, joka luo animaatiolle liikkeentunnun. Koodi `setInterval(animateArrow, 1000/60);` -- [stuff.js](https://github.com/saanalapinkangas/saanalapinkangas.github.io/blob/42fd03c13a83a9d8f563c4d80f2d7156104e624b/assets/stuff.js)

**2/5 Successful implementation of an AJAX call or Fetch**
- [Erillinen sivu luotu Fetchin käyttöön](https://saanalapinkangas.github.io/deletelater.html), koska sitä ei saatu sopimaan portfolion sisältöön järkevästi. Sivulla haetaan dokumentti, jonka sisältö korvaa sivulla olevan tekstin. -- [javascript](https://github.com/saanalapinkangas/saanalapinkangas.github.io/blob/42fd03c13a83a9d8f563c4d80f2d7156104e624b/deletelater.html)

**3/5 Data from the asynchronous call is displayed on the webpage**
- Useat sivun ominaisuudet toimivat asynkronisesti, eli tiedot haetaan tai päivitetään ilman sivun uudelleenlatausta.
  - Modaalisten ikkunoiden avaukset, [esimerkiksi nämä.](https://saanalapinkangas.github.io/illustrations.html)  -- [modal.js](https://github.com/saanalapinkangas/saanalapinkangas.github.io/blob/42fd03c13a83a9d8f563c4d80f2d7156104e624b/assets/modal.js)
  - Kielenvaihto-nappi jossa teksti vaihtuu englannista suomeksi, [esimerkkisivu.](https://saanalapinkangas.github.io/aboutme.html) 
 -- [kielenvaihtonappi.js](https://github.com/saanalapinkangas/saanalapinkangas.github.io/blob/42fd03c13a83a9d8f563c4d80f2d7156104e624b/assets/stuff2.js)

**4/5 Error handling is implemented (for failed API calls, etc.)**
- [Erillinen sivu luotu ongelmatilanteiden hoitamiseen](https://saanalapinkangas.github.io/deletelater.html), koska sitä ei saatu sopimaan portfolion sisältöön järkevästi. Sivulla haetaan dokumentti, jota ei löydy. -- [javascript](https://github.com/saanalapinkangas/saanalapinkangas.github.io/blob/42fd03c13a83a9d8f563c4d80f2d7156104e624b/deletelater.html)

**5/5 Effective use of asynchronous data to enhance user experience (like filtering, sorting)**
- Sivulla ei ole mitään suurta ja näyttävää toimintoa tähän ominaisuuteen, mutta useita pienempiä osia. Aikaisemmassa osassa (3/5) mainitut modaalinen ikkuna ja kielenvaihto-nappi pyrkivät käyttäjäkokemuksen parantamiseen ja vuorovaikutukseen. Myös useat pehmeät, asyknroniset siirtymät (esim. ankkuroinnit, [portfolion infotekstien ilmestyminen](https://saanalapinkangas.github.io/index.html), slideshow) pyrkivät miellyttämään käyttäjää.
