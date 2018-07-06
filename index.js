const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys'); // No need to add the .js extension here

const app = express();


app.get(
    '/', () =>
    console.log("test")
);


// Listens to port or 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);