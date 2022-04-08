const { response } = require('express')
const express = require('express')
const db = require('../../db')
const utils = require('../../utils')

const router = express.Router()

//Login
router.post('/signin',(request,response) => {
    const { email, password } = request.body

    const connection = db.openConnection()

    const statement = `
     select
     adminid, firstName, lastName, email ,password
     from admin
     where
        email = '${email}' and
        password = '${password}'
    `
    connection.query(statement, (error, result) => {

        if(error){
            response.send(utils.createResult(error))
        }else if (result.length == 0){
            //no user matching above criteria
            response.send(utils.createResult('User not found'))
        } else {
            const results = result[0]
            response.send(utils.createResult(null, results))
        }
        connection.end()
    })
})
module.exports = router