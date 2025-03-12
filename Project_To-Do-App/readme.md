Dokumentaatio To-Do-Apille:

Projektin kuvaus: Tehdään "To-Do-Appi" eli päivittäisten tehtävien hallintaan ja asettamiseen tarkoitettu suunnittelu sovellus. Voi suunnitella myös pitemmällä aikavälillä. Käyttäjä voi kirjautua järjestelmään, jotta käyttäjä voi tallentaa omat tehtävänsä. Tehdään hyvä käytettävyys, kuten "Drag & Drop"-järjestely tai tärkeysjärjestys tehtäville. Deadline asettamis toiminto + muistutukset (esim. sähköpostimuistutus lähestyvistä tehtävistä).



Asennusohjeet:



Käyttöönotto:







Lokikirja:
-25.02.2025 ---- (4 tuntia)
-- Projektin aiheen suunnittelu ja aloitus. Päädyin suunnittelemaan To-Do React-sovelluksen. Node.js + Express backend, joka tarjoaa REST API:n tehtävien hallintaan. Tietokantana on MongoDB, jossa tehtävät säilyvät palvelimella. JWT-authentikointi (kirjautuminen), jossa käyttäjä voi tallentaa omat tehtävänstä. 
-- Loin VSC projektin kansio rakenteen ja asensin tarvittavat paketit projektin tässä vaiheessa, kuten express (Web palvelimen toteuttamiseen), mongoose (MongoDB:n käyttöön), jsonwebtoken (käyttäjien autentikointiin(JWT)), bcryptjs (Salasanojen hashaukseen), cors ((Cross-Origin Resource Sharing) Reactin ja backendin välinen yhteys), nodemon (Kehitystyökalun automaattiseen uudellenkäynnistämiseen).
-- Loin User.js, Task.js, MongoDB alkumallit.
-- Loin REST API-reitit, taskroutes.js.
-- Loin server.js Backendin käynnistämiseen.

-02.03.2025 ---- (4 tuntia)
-- nodemon käyttöönotto.
-- 
-- Google Cloudiin VM-luominen ja SSH yhteyden tekeminen ja testaus VSC:lla. Käytin Debian 12 (Bookworm) käyttöjärjestelmää ja asennan tähän MongoDB:n version 8.0.0 tietokannan hallintaan. Google Cloud VM käyttäjätunnus: centria-koodi