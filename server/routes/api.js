const express = require('express')
const router = express.Router()
const Ride = require('../models/user')

const mongoose = require('mongoose')
const db = "mongodb://n9exorcist:Je4nd7h123@ds151533.mlab.com:51533/ridesdb"

mongoose.connect(db, err => {
    if (err) {
        console.log('Error', err)
    } else {
        console.log('Connected to mongoDB')
    }
}) 

router.get('/', function(req, res){
    res.send('From api routes')
})

router.get('/events', (req, res) => {
    let events = [
        {
            "name": "Maria",
            "startlocation": "Stockholm",
            "destination": "Halmstad",
            "car": "Saab",
            "seatsavailable": 2,
            "id": 1
          },
          {
            "name": "Maria",
            "startlocation": "Gothenberg",
            "destination": "Halmstad",
            "car": "Saab",
            "seatsavailable": 2,
            "id": 2
          },
          {
            "name": "Maria",
            "startlocation": "Copenhagen",
            "destination": "Halmstad",
            "car": "Saab",
            "seatsavailable": 2,
            "id": 3
          },
          {
            "name": "Maria",
            "startlocation": "Lund",
            "destination": "Halmstad",
            "car": "Saab",
            "seatsavailable": 2,
            "id": 4
          }
    ]  
    res.json(events)
})

router.post('/register', (req, res) => {
    let ridesData = req.body
    let ride = new Ride(ridesData)
    ride.save((error, registeredRide) => {
        if (error){
            console.log(error)
        } else {
            res.status(200).send(registeredRide)
            console.log("registeredRide", registeredRide)
        }
    })
})

router.post('/login', (req, res)=> {
    let ridesData = req.body
    Ride.findOne({name: ridesData.name}), (error, ride) => {
        if(error) {
            console.log(error)
        } else { 
            if(!ride) {
                res.status(401).send('Invalid Username')
            } else {
                res.status(200).send('ride')
            }
        }
    }
})


module.exports = router