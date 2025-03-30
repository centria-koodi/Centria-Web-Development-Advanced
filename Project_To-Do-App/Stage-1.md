Käyttäjäpersoonat:

1. Opiskelija Emma:
- 21-vuotias yliopisto-opiskelija
- Käyttää To-Do-sovellusta luentojen, tehtävien ja ryhmäprojektien hallintaan
- Tarvitsee selkeän tehtävälistan, muistutukset ja mahdollisuuden järjestää tehtävät eri kurssien alle

2. Työntekijä Tommi:
- 35-vuotias IT-alan asiantuntija
- Hallitsee työprojektien ja henkilökohtaisten tehtävien yhdistelmää
- Haluaa synkronoida sovelluksen kalenterin kanssa ja lisätä tehtäviin deadlineja

3. Perheenäiti Anna
- 40-vuotias kahden lapsen äiti
- Käyttää sovellusta perheen aikataulujen ja kauppalistan hallintaan
- Arvostaa mahdollisuutta jakaa tehtäviä perheenjäsenille ja lisätä muistutuksia

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Käyttötapaukset ja tilanteet:

1. Opiskelija tilanne:
- Avaa sovelluksen -> Klikkaa etusivulla "Lisää tehtävä" kuvaketta ja kirjoittaa "Palauta essee" -> Asettaa eräpäivän tehtävälle -> Asettaa alatehtäviä "Etsi lähteet", "Kirjoita johdanto", yms -> sulkee sovellusken. (Sovellus muistuttaa häntä ennen eräpäivää)

2. Työntekijä tilanne
- Avaa sovelluksen -> Siirty profiilinsa asetuksiin -> Synkronoi tehtävänsä Google-kalenteriin -> Siirtyy etusivulle ja Luo tehtävän "valmistele esitys" -> Lisää tiedoston tehtävään -> Sulkee sovelluksen. (Myöhemmin merkitsee tehtävän valmiiiksi ja tehtävä säilyy yhteenvedossa suoritettuna)

3. Perheenäiti tilanne
- Avaa sovelluksen -> Luo tehtävän "Viikon kauppalista" -> Asettaa "alatehtäviä", eli erinlaisia ostoksia -> Jakaa lisan puolisolleen -> Puoliso merkitsee välivaiheita suoritetuiksi omallla sovelluksellaan -> Äiti asettaa vielä toistuvan muistutuksen "Varaa hammaslääkäri lapselle" -> Sulkevat sovelluksen. (Sovellus muistuttaa joka 3kk välein hammmaslääkäristä)

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Käyttöliittymän prototyypit:


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Tietoarkkitehtuuri ja tekninen suunnittelu:

- Projektin kuvaus: Tehdään "To-Do-Appi" eli päivittäisten tehtävien hallintaan ja asettamiseen tarkoitettu suunnittelu sovellus. Voi suunnitella myös pitemmällä aikavälillä. Käyttäjä voi kirjautua järjestelmään, jotta käyttäjä voi tallentaa omat tehtävänsä. Tehdään hyvä käytettävyys, kuten "Drag & Drop"-järjestely tai tärkeysjärjestys tehtäville. Deadline asettamis toiminto + muistutukset (esim. sähköpostimuistutus lähestyvistä tehtävistä).
- HTML & CSS – Käyttöliittymän peruselementit ja tyylit.
- JavaScript (React) – Sovelluksen interaktiivisuus ja tilan hallinta.
- Vite Projektin käynnistämiseen.
- Node.js – Backend toteutetaan Node.js:llä ja Expressillä.
- REST & Web API – Tehtävät tallennetaan backend-palvelimeen REST API:n avulla.
- Tietokantana on MongoDB, jossa tehtävät säilyvät palvelimella.
- JWT-authentikointi (kirjautuminen), jossa käyttäjä voi tallentaa omat tehtävänstä. 
- Käyttöliitymä - UI (Tailwind CSS tai Material UI?)

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Projektinhallinta ja käyttäjätestaus:

- Projektin- ja versionhallintaan GitHub.
- Unit-testaus (Mocha, Jest) - Testataan yksittäisiä funktioita backendissä.
- API-testaus (cURL/MongoDB compass) - Testatan backendin API-endpointit sekä Varmistetaan, että CRUD-operaatiot toimivat
- Käyttäjätestaus (UI-testaus) - Pyydetään testikäyttäjiä kokeilemaan sovellusta
- Loppukäyttäjien testaus -Testaan eri laitteilla ja selaimilla (Chrome, Firefox, Edge) - Tarkistetaan mobiilikäytettävyys