const express = require("express");
const db = require("./db");
const U_router = require("./bookRoute");

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/book", U_router);


// Server
app.listen(4000, () => {
  console.log("Server running on port 4000");
});
