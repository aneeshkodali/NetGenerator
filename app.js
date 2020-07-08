const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("HOME PAGE");
});

const port = 3000;
app.listen(port, () => {
    console.log("Server running...");
})