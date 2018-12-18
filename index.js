const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bodyParser = require("body-parser");
const keys = require("./config/dev");
require("./models/User");

const User = mongoose.model("users");

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(bodyParser.raw());

app.post("/api/signup", (req, res) => {
    const { name, email, password, country } = req.body;

    const user = new User({
        name,
        email,
        password,
        country
    });

    console.log(req.body);

    user.save((err, updatedUser) => {
        if (err) return handleError(err);
        res.send(updatedUser);
    });
});

app.listen(5000);
