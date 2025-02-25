const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

// Hae käyttäjän kaikki tehtävät
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.user.id });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Virhe haettaessa tehtäviä" });
  }
});

// Lisää uusi tehtävä
router.post("/", async (req, res) => {
  try {
    const { title, description, priority, dueDate } = req.body;
    const newTask = new Task({ userId: req.user.id, title, description, priority, dueDate });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: "Tehtävän lisääminen epäonnistui" });
  }
});

// Lisää alitehtävä
router.post("/:id/subtasks", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    task.subtasks.push({ title: req.body.title });
    await task.save();
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: "Alitehtävän lisääminen epäonnistui" });
  }
});

// Päivitä alitehtävän tila
router.put("/:id/subtasks/:subtaskId", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    const subtask = task.subtasks.id(req.params.subtaskId);
    subtask.completed = req.body.completed;
    await task.save();
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: "Alitehtävän päivittäminen epäonnistui" });
  }
});

// Poista alitehtävä
router.delete("/:id/subtasks/:subtaskId", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    task.subtasks = task.subtasks.filter(sub => sub._id.toString() !== req.params.subtaskId);
    await task.save();
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: "Alitehtävän poistaminen epäonnistui" });
  }
});

module.exports = router;
