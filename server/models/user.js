const mongoose = require('mongoose')

const Schema = mongoose.Schema
const userSchema = new Schema({
      name: String,
      startloc: String,
      destination: String,
      car: String,
      seatsavail: Number
})

module.exports = mongoose.model('user', userSchema, 'rides')
// 'rides' from db collection name 