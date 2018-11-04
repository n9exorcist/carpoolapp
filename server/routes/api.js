const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const db = "mongodb://n9exorcist:Je4nd7h123@ds151533.mlab.com:51533/ridesdb"

mongoose.connect(db, err => {
    if(err) {
        console.log('Error', err)
    } else {
        console.log('Connected to mongoDB')
    }
}) 

router.get('/', function(req, res){
    res.send('From api routes')
})

module.exports = router