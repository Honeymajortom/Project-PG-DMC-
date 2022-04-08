const { response, request } = require('express')
const express = require('express')
const db = require('../../db')
const utils = require('../../utils')

const router = express.Router()

//edit menu
router.put('/editmenu/:menuid',(request,response) => {
    const connection = db.openConnection()
    
    const{menuid} = request.params

    const{name,description,price}=request.body
    
    const statement =`
    update menu set 
        name ='${name}', 
        description ='${description}', 
        price ='${price}' 
        where menuid = ${menuid} 
    `

    connection.query(statement,(error,result) => {
        
        response.send(utils.createResult(error, result))
        
        connection.end()
    })
})
module.exports = router