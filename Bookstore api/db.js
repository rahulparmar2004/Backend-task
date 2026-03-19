const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/book");

const db = mongoose.connection;

db.on("connected", () => {
  console.log("database connected");
});