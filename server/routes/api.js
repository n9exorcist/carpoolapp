const express = require('express')
const router = express.Router()

router.get('/', function(req, res){
    res.send('From api routes')
})

module.exports = router