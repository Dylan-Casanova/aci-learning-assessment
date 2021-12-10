const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  Name: { type: String, required: true },
  Status: { type: String, required: true },
  CreatedAt: { type: Date, required: true, default: Date.now},
  UpdatedAt: { type: Date, required: true, default: Date.now },
  deletedAt: { type: Date},
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;