const passport = require('passport');

const passportFunction = (app) => {
    app.use(passport.initialize());
    app.use(passport.session());
    
    passport.serializeUser((user, done) => {
       done(null, user); 
    });
    
    passport.deserializeUser((user, done) => {
       done(null, user); 
    });
    
    require('./strategies/local.strategy')();
    
};

module.exports = passportFunction;