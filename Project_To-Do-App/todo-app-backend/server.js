require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/todoapp";

// Yhdistä tietokantaan
mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB yhteys onnistui"))
  .catch(err => console.error("❌ Tietokantayhteys epäonnistui", err));

// Ota käyttöön tehtäväreitit
const taskRoutes = require("./routes/taskRoutes");
app.use("/api/tasks", taskRoutes);

app.listen(PORT, () => {
  console.log(`Palvelin käynnissä portissa ${PORT}`);
});
