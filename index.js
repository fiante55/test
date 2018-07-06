const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys'); // No need to add the .js extension here

const app = express();

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback'
        }, 
        (accessToken, refreshToken, profile, done) => {
            console.log('accessToken', accessToken);
            console.log('refresh token', refreshToken);
            console.log('profile', profile);
        }
    )
);

// Route handler
// When users go to /auth/google, ask passport to get the Google code with the GoogleStrategy
app.get(
    '/auth/google',
    passport.authenticate('google', {
        scope: ['profile', 'email'] // Ask google for code with profile and email permission
    })
);

// When the users comes back, Passport agains deals with the code
app.get(
    '/auth/google/callback', 
    passport.authenticate('google')
);


// Listens to port or 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);