const express = require('express')
const db = require('../db')
const utils = require('../utils')

const router = express.Router()
console.log("in user page")

router.get('/test', (request, response) => {
    response.send('Hello World!')
})



module.exports = router