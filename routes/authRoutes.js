const passport = require('passport'); // Requires passport npm module, not the service

// Presume express will call authRoutes.js
module.exports = (app) => {

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

};
