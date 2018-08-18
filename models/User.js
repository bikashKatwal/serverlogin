const mongoose = require('mongoose');
const { Schema } = mongoose; // const Schema = mongoose.Schema

const userSchema = new Schema({
	googleId: String
});

mongoose.model('users', userSchema); //if it dooesn't exist it creates new collections [users]
//users vanne table ra userSchema column haru users vanera model create huncha
