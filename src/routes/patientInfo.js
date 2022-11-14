const express = require("express");
const patientprofile = require("../controllers/patientProfile");
//profile info patient list

const router = express.Router();

router.get("/", patientprofile.getProfile);

//patient detail info

module.exports = router;