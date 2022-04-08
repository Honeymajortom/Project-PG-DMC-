const { response, request } = require('express')
const express = require('express')
const db = require('../../db')
const utils = require('../../utils')

const router = express.Router()

//view all orders
router.get('/allorders',(request,response) =>{

    const Connection = db.openConnection()

    const statement = `
        select * 
        from orderdetails
        where status = 'order placed'
        `
   
    Connection.query(statement,(error,request) => {
        
        response.send(utils.createResult(error, request))

        Connection.end()
    })
})

//accept order
router.patch('/allorders/accept/:detailsid', (request, response) => {
    const connection = db.openConnection()

    const{ detailsid } = request.params

    const statement =`
    update orderdetails
        set status ='order confirmed'
        where detailsid= ${detailsid}
    `
    connection.query(statement, (error, result) => {

        response.send(utils.createResult(error,result))

        connection.end()
    })
})

//preparing order
router.patch('/allorders/preparing/:detailsid', (request, response) => {
    const connection = db.openConnection()

    const{ detailsid } = request.params

    const statement =`
    update orderdetails
        set status ='Preparing'
        where detailsid= ${detailsid}
    `
    connection.query(statement, (error, result) => {

        response.send(utils.createResult(error,result))

        connection.end()
    })
})

//out for delivery
router.patch('/allorders/outfordelivery/:detailsid', (request, response) => {
    const connection = db.openConnection()

    const{ detailsid } = request.params

    const statement =`
    update orderdetails
        set status ='out for delivery'
        where detailsid= ${detailsid}
    `
    connection.query(statement, (error, result) => {

        response.send(utils.createResult(error,result))

        connection.end()
    })
})

//order delivered
router.patch('/allorders/delivered/:detailsid', (request, response) => {
    const connection = db.openConnection()

    const{ detailsid } = request.params

    const statement =`
    update orderdetails
        set status ='Delivered'
        where detailsid= ${detailsid}
    `
    connection.query(statement, (error, result) => {

        response.send(utils.createResult(error,result))

        connection.end()
    })
})
module.exports = router