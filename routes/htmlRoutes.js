
const router = require("express").Router();
const path = require("path");

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;
// module.exports = function (app) {
//   app.get("/exercise", function (req, res) {
//     res.sendFile(path.join(__dirname, "../public/exercise.html"));
//   });

//   app.get("/stats", function (req, res) {
//     res.sendFile(path.join(__dirname, "../public/stats.html"));
//   });
// };
