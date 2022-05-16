const express = require('express')
const router = express.Router()
const db = require('../db')
const utils = require('../utils')

router.get('/', (request, response) => {
  db.execute(
    `select * from address where userId = ${request.userId}`,
    (error, result) => {
      response.send(utils.createResult(error, result))
    }
  )
})

router.post('/', (request, response) => {
  const { line1, line2, city, state, country, zipCode } = request.body

  db.execute(
    `insert into address 
      (line1, line2, city, state, country, zipCode, userId) 
     values
      (?, ?, ?, ?, ?, ?, ?)
    `,
    [line1, line2, city, state, country, zipCode, request.userId],
    (error, result) => {
      response.send(utils.createResult(error, result))
    }
  )
})

router.put('/:id', (request, response) => {
  const { id } = request.params
  const { line1, line2, city, state, country, zipCode } = request.body

  db.execute(
    `update address 
      set
        line1 = ?, 
        line2 = ?, 
        city = ?, 
        state = ?, 
        country = ?, 
        zipCode = ?, 
        userId = ?
      where
        id = ?
    `,
    [line1, line2, city, state, country, zipCode, request.userId, id],
    (error, result) => {
      response.send(utils.createResult(error, result))
    }
  )
})

router.delete('/:id', (request, response) => {
  const { id } = request.params

  db.execute(
    `delete from  address 
      where
        id = ${id}
    `,
    (error, result) => {
      response.send(utils.createResult(error, result))
    }
  )
})

module.exports = router
