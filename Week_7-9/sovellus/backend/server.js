const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const port = 3000;

// Käytetään JSON-middlewarea POST-datan käsittelyyn
app.use(express.json());

// Palvellaan staattisia tiedostoja (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Ohjaa pääreitillä (`/`) index.html-tiedostoon
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Yhdistä SQLite-tietokantaan
const db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
        console.error('Tietokantavirhe:', err.message);
    } else {
        console.log('Yhteys SQLite-tietokantaan onnistui.');
    }
});

// Luo taulu, jos sitä ei ole olemassa
db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP,
    updated_at TEXT DEFAULT CURRENT_TIMESTAMP
  )`);

// Luo uusi käyttäjä
app.post('/users', (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: 'Nimi ja sähköposti vaaditaan' });
    }

    const query = `INSERT INTO users (name, email, created_at, updated_at) VALUES (?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)`;
    db.run(query, [name, email], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id: this.lastID, name, email });
    });
});

// Päivitä käyttäjän tiedot ja updated_at
app.put('/users/:id', (req, res) => {
    const { name, email } = req.body;
    const { id } = req.params;

    if (!name && !email) {
        return res.status(400).json({ error: 'Päivitä vähintään yksi kenttä' });
    }

    let fields = [];
    let values = [];

    if (name) {
        fields.push("name = ?");
        values.push(name);
    }
    if (email) {
        fields.push("email = ?");
        values.push(email);
    }

    fields.push("updated_at = CURRENT_TIMESTAMP"); // Päivitä päivämäärä aina muutoksen yhteydessä
    values.push(id);

    const query = `UPDATE users SET ${fields.join(', ')} WHERE id = ?`;

    db.run(query, values, function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (this.changes === 0) {
            return res.status(404).json({ error: 'Käyttäjää ei löytynyt' });
        }
        res.status(200).json({ message: 'Käyttäjä päivitetty' });
    });
});

// Hae kaikki käyttäjät (Read)
app.get('/users', (req, res) => {
    db.all('SELECT * FROM users', [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});

// Poista käyttäjä (Delete)
app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
  
    db.run(`DELETE FROM users WHERE id = ?`, id, function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      if (this.changes === 0) {
        return res.status(404).json({ error: 'Käyttäjää ei löytynyt' });
      }
      res.json({ message: 'Käyttäjä poistettu', id });
    });
  });

// Käynnistä palvelin
app.listen(port, () => {
    console.log(`Palvelin käynnissä osoitteessa http://localhost:${port}`);
});