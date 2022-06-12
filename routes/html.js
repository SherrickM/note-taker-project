const route = require("express").Router();
const path = require("path");

route.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "public/notes.html"));
});

module.exports = route;
