const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50
  },
  email: {
    type:String,
    trim: true, // 공백제거
    unique: 1
  },
  password: {
    type: String,
    monlength: 5,
  },
  lastname: {
    type: String,
    maxlength: 50
  },
  role: {
    type: Number,
    default: 0
  },
  image: String,
  token: {
    type: String
  },
  tokenExp: { // 토큰유효기간 지정
    type: Number
  }
})

const User =  mongoose.model('User', userSchema)

module.exports = {User}