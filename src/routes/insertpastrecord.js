const express = require("express");
const pastrecord = require("../controllers/pastRecord");
const router = express.Router();

router.post("/", pastrecord.storeInfo);

//patient detail info

module.exports = router;