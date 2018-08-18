const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users'); //User.js ma users ma userSchema huncha User ma model aaucha

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((userId, done) => {
	User.findById(userId).then((user) => {
		done(null, user);
	});
});

passport.use(
	new GoogleStrategy(
		{
			clientID: keys.GOOGLE_CLIENT_ID,
			clientSecret: keys.GOOGLE_CLIENT_SECRET,
			callbackURL: '/auth/google/callback'
		},
		(accessToken, refreshToken, profile, done) => {
			User.findOne({ googleId: profile.id }).then((existingUser) => {
				if (!existingUser) {
					//We don't have a user record with this Id, make a new record.
					new User({ googleId: profile.id }).save().then((user) => done(null, user)); //profile.id is comming from user's google profile id.
				} else {
					//We already have a record with the given profile ID.
					done(null, existingUser);
				}
			});
		}
	)
);
