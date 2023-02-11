const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.use("/api", require("./routes/routes"));

const mongoose = require("mongoose");

require("dotenv").config();
mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;

db.on("error", (error) => {
    console.log(error);
});

db.once("connected", () => {
    console.log(`Connected to ${db.name} Database`);
});

const PORT = 8080;
app.listen(PORT, () => console.log(`It's alive on http://localhost:${PORT}`));

module.exports = app;
