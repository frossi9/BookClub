const express = require("express");
const router = require("./router");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, "public")));

app.use(router);
// SAME AS
// app.use("/", router);

app.listen(port, function() {
    console.log(`Listening on ${port}`);
});

