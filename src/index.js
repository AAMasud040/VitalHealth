const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 3500;

const app = express();

app.use(cors());
app.use(express.json());


app.use("/register", require("./routes/register"));



app.get("/", (req, res) => {
    res.send("<h1>Hello</h1>");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
