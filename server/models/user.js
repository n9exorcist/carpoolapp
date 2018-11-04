const mongoose = require('mongoose')

const Schema = mongoose.Schema
const userSchema = new Schema({
    name: String,
    startLocation: String,
    destination: String,
    car: String,
    seatsAvailable: Number
})

module.exports = mongoose.models('user', userSchema, 'rides')
// 'rides' from db collection name 