const express = require("express");
const patientprofile = require("../controllers/patientCredentials");

const router = express.Router();

router.get("/", patientprofile.getProfile);

//patient detail info

module.exports = router;