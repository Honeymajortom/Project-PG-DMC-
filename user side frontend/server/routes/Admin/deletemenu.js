const { response, request } = require('express')
const express = require('express')
const db = require('../../db')
const utils = require('../../utils')

const router = express.Router()

//delete a menu
router.delete('/deletemenu/:menuid',(request,response) => {
    const connection = db.openConnection()

    const{menuid} = request.params

    const statement =`
        delete from menu 
        where menuid = '${menuid}' 
    `
    connection.query(statement,(error,result) => {
        
        response.send(utils.createResult(error,result))

        connection.end()
    })
})
module.exports = router