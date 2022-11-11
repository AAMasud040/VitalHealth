const express = require("express");
const doctorprofile = require("../controllers/doctorProfile");
//profile info patient list

const router = express.Router();

router.get("/", doctorprofile.getProfile);

//patient detail info

module.exports = router;