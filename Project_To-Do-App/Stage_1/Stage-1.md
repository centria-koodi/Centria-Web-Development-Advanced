# To-Do App - Suunnitelma

## 🧑‍🎓 Käyttäjäpersoonat

### 1. 🎓 Opiskelija Emma
- 📚 21-vuotias yliopisto-opiskelija
- ✅ Käyttää To-Do-sovellusta luentojen, tehtävien ja ryhmäprojektien hallintaan
- 📌 Tarvitsee selkeän tehtävälistan, muistutukset ja mahdollisuuden järjestää tehtävät eri kurssien alle

### 2. 💻 Työntekijä Tommi
- 👨‍💻 35-vuotias IT-alan asiantuntija
- 🔄 Hallitsee työprojektien ja henkilökohtaisten tehtävien yhdistelmää
- 📅 Haluaa synkronoida sovelluksen kalenterin kanssa ja lisätä tehtäviin deadlineja

### 3. 👩‍👧‍👦 Perheenäiti Anna
- 👩‍👦 40-vuotias kahden lapsen äiti
- 🏡 Käyttää sovellusta perheen aikataulujen ja kauppalistan hallintaan
- 👨‍👩‍👧 Arvostaa mahdollisuutta jakaa tehtäviä perheenjäsenille ja lisätä muistutuksia

---

## 🎭 Käyttötapaukset ja tilanteet

### 1. 🎓 Opiskelijan tilanne
1. 📲 Avaa sovelluksen
2. ➕ Klikkaa etusivulla "Lisää tehtävä" -kuvaketta ja kirjoittaa "Palauta essee"
3. ⏳ Asettaa eräpäivän tehtävälle
4. 📌 Asettaa alatehtäviä: "Etsi lähteet", "Kirjoita johdanto", jne.
5. 🔔 Sovellus muistuttaa ennen eräpäivää

### 2. 💼 Työntekijän tilanne
1. 📲 Avaa sovelluksen
2. ⚙️ Siirtyy profiilinsa asetuksiin -> Synkronoi tehtävänsä Google-kalenteriin
3. 📝 Luo tehtävän "Valmistele esitys"
4. 📎 Lisää tiedoston tehtävään
5. ✅ Myöhemmin merkitsee tehtävän valmiiksi ja se säilyy yhteenvedossa

### 3. 🏡 Perheenäidin tilanne
1. 📲 Avaa sovelluksen
2. 🛒 Luo tehtävän "Viikon kauppalista"
3. 📌 Lisää alatehtäviä: ostoslistan eri tuotteet
4. 👨‍👩‍👧 Jakaa listan puolisolleen
5. 🔔 Asettaa toistuvan muistutuksen "Varaa hammaslääkäri lapselle" joka 3kk

---

## 🎨 Käyttöliittymän prototyypit
[Lataa PDF](To-Do-App_UI-Prototypes.pdf)

---

## 🏗️ Tietoarkkitehtuuri ja tekninen suunnittelu

### 🔹 Projektin kuvaus
- 📌 "To-Do-Appi" on päivittäisten tehtävien hallintaan tarkoitettu sovellus
- 🗓️ Mahdollistaa myös pitkän aikavälin suunnittelun
- 🔐 Käyttäjä voi kirjautua järjestelmään tallentaakseen omat tehtävänsä
- 🎯 Käytettävyys: "Drag & Drop" -järjestely ja tärkeysjärjestys tehtäville
- 🔔 Deadline-asetukset ja muistutukset (esim. sähköpostimuistutus)

### 🔹 Teknologiat
- 🎨 **HTML & CSS** – Käyttöliittymän peruselementit ja tyylit
- ⚛️ **JavaScript (React)** – Sovelluksen interaktiivisuus ja tilan hallinta
- 🚀 **Vite** – Projektin käynnistämiseen
- 🌍 **Node.js & Express** – Backendin toteutus
- 🔄 **REST & Web API** – Tehtävät tallennetaan backend-palvelimeen
- 💾 **MongoDB** – Tietokanta tehtävien tallentamiseen
- 🔐 **JWT-autentikointi** – Käyttäjä voi tallentaa omat tehtävänsä
- 🎨 **Käyttöliittymä** – UI (Tailwind CSS tai Material UI?)

---

## 📊 Projektinhallinta ja käyttäjätestaus

### 📂 Versionhallinta
- 🛠️ **GitHub** – Projektin- ja versionhallintaan

### 🔍 Testaus
- ✅ **Unit-testaus (Mocha, Jest):** Testataan yksittäisiä funktioita backendissä
- 🔄 **API-testaus (cURL/MongoDB Compass):** Testataan backendin API-endpointit ja CRUD-operaatiot
- 🎭 **Käyttäjätestaus (UI-testaus):** Pyydetään testikäyttäjiä kokeilemaan sovellusta
- 📱 **Loppukäyttäjien testaus:**
  - 🖥️ Testataan eri laitteilla ja selaimilla (Chrome, Firefox, Edge)
  - 📲 Tarkistetaan mobiilikäytettävyys

---

✨ **Tavoitteena on helppokäyttöinen, monipuolinen ja skaalautuva To-Do-sovellus!** 🚀

