const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/courses_db");

const courseSeed = [
  {
    Name: "How to get a job with ACI Learning",
    Status:"in_production",
    CreatedAt: new Date(Date.now()),
    updatatedAt: new Date(Date.now()),
  },
  {
    Name: "How to get make origami",
    Status:"scheduled",
    CreatedAt: new Date(Date.now()),
    updatatedAt: new Date(Date.now()),
  }
  
];

db.Course.deleteMany({})
  .then(() => db.Course.collection.insertMany(courseSeed))
  .then(data => {
    console.log(" records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
