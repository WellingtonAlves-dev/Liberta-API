const express = require("express");
const consign = require("consign");
const bodyParser = require("body-parser");
const app = express();
const login = require("./auth/login");
const verify = require("./middleware/verify");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static("uploads/"));

login(app);

app.use(verify);

consign().include("routes/").into(app);

var porta = process.env.PORT || 3000;


app.listen(porta, err => {
    if(err) console.log(err);
    console.log("Service work *:3000");
})