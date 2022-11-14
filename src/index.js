const express = require("express");
const cors = require("cors");
const verifyJWT = require('./middleware/verifyJWT');

const PORT = process.env.PORT || 3500;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/register", require("./routes/register"));
app.use("/login", require("./routes/login.js"));

app.use(verifyJWT)
app.use("/doctor-credentials", require("./routes/doctorcredentials"));
app.use("/patient-info",  require("./routes/patientInfo"))
app.use("/lifestyle", require("./routes/insertpastrecord"))

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
