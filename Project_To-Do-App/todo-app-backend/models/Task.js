/*Luodaan MongoDB-mallit*/
const mongoose = require("mongoose");

const SubtaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false }
});

const TaskSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  description: String,
  completed: { type: Boolean, default: false },
  priority: { type: String, enum: ["low", "medium", "high"], default: "medium" },
  dueDate: Date,
  subtasks: [SubtaskSchema] // Alitehtävät tallennetaan tähän
});

module.exports = mongoose.model("Task", TaskSchema);
