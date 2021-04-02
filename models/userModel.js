const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please tell us your name!!']
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email']
  },
  photo: String,
  password: {
    type: String,
    required: [true, 'Please provide a password!'],
    unique: true,
    minlength: [8, 'A password must have atleast 8 characters!']
    //validate: [validator.isAlpha, 'tour name should only contain alphabets']
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please provide a password!']
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
