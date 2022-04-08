const { response } = require('express')
const express = require('express')
const db = require('../../db')
const utils = require('../../utils')

const router = express.Router()

//view all menu
router.get('/menuDetails',(request, response) => {
    const connection = db.openConnection()

    const statement = `
      select *
       from menu
    `

    connection.query(statement, (error, requests) => {
    
        response.send(utils.createResult(error, requests))

        connection.end()

      })
})
module.exports = router