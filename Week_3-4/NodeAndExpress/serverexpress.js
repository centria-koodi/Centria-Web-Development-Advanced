const express = require('express');
const path = require('path');
const app = express();
const port = 3001;

// Palvellaan staattisia tiedostoja
app.use(express.static(path.join(__dirname, '/')));

// Määritä staattisten tiedostojen hakemisto
app.use('/media', express.static(path.join(__dirname, 'media')));

// Määritä reitti HTML-tiedoston jakamiseen
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Käynnistä palvelin
app.listen(port, () => {
  console.log(`Palvelin käynnissä osoitteessa http://localhost:${port}`);
});