const { response } = require('express')
const express = require('express')
const db = require('../../db')
const utils = require('../../utils')

const router = express.Router()

//address
router.post('/addaddress/:userid',(request,response) =>{
    const Connection = db.openConnection()
    const{ userid } = request.params

    const { addressa, addressb, city, pincode, state } = request.body

    const addstatement = `
    insert into 
        address(userid, addressa, addressb, city, pincode, state)
        values('${userid}','${addressa}','${addressb}','${city}','${pincode}','${state}')
    `
   
    Connection.query(addstatement,(error , result) => {
        Connection.end()

        response.send(utils.createResult(error, result))        
    })
})

//used to export the router which has all the apis added
module.exports = router