const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/cool", (req, res, next) => {
  res.send("Kamu keren sekali");
});

router.get("/cool2", (req, res, next) => {
  res.send("Kamu keren sekali 2X");
});

module.exports = router;
