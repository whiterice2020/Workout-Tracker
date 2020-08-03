const router = require("express").Router();
const path = require("path");
var db = require("../models");



// Route to index.html
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
})

// Route to exercise.html
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
})

// Route to stats.html
router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
})

module.exports = router;