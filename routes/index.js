const db = require("../database/db");
const multer = require("multer");
const mysql = require("mysql");

module.exports = (app) => {
  app.get("/", (req, res) => {
    res.send("API Liberta!");
  });
};
