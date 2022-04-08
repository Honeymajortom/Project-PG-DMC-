const express = require('express')
const router = express.Router()
const db = require('../db')
const utils = require('../utils')

// router.get('/', (request, response) => {
//   db.execute(
//     ` select c.id as cartId, c.quantity, m.id, m.title, m.company, m.price, m.mrp, m.unit, m.thumbnail, m.expiryDate
//       from cart c
//         inner join medicines m on 
//           c.productId = m.id and c.userId = ${request.userId}`,
//     (error, items) => {
//       response.send(utils.createResult(error, items))
//     }
//   )
// })


router.get('/', (request, response) => {
  db.execute(
    ` select c.id as cartId, c.quantity, m.id, m.title, m.descr, m.price, m.thumbnail
      from cart c
        inner join menu m on 
          c.productId = m.id and c.userId = ${request.userId}`,
    (error, items) => {
      response.send(utils.createResult(error, items))
    }
  )
})















// router.post('/', (request, response) => {
//   const { id, price } = request.body
//   db.execute(
//     `insert into cart (userId, productId, price, quantity) 
//     values (${request.userId}, ${id}, ${price}, 1)`,
//     (error, result) => {
//       response.send(utils.createResult(error, result))
//     }
//   )
// })


router.post('/', (request, response) => {
  const { id, price } = request.body
  db.execute(
    `insert into cart (userId, productId, price, quantity) 
    values (${request.userId}, ${id}, ${price}, 1)`,
    (error, result) => {
      response.send(utils.createResult(error, result))
    }
  )
})















// router.put('/:id', (request, response) => {
//   const { id } = request.params
//   const { quantity } = request.body
//   db.execute(
//     `update cart
//         set quantity = ${quantity}
//      WHERE
//         id = ${id}`,
//     (error, result) => {
//       response.send(utils.createResult(error, result))
//     }
//   )
// })


router.put('/:id', (request, response) => {
  const { id } = request.params
  const { quantity } = request.body
  db.execute(
    `update cart
        set quantity = ${quantity}
     WHERE
        id = ${id}`,
    (error, result) => {
      response.send(utils.createResult(error, result))
    }
  )
})















// router.delete('/:id', (request, response) => {
//   const { id } = request.params
//   db.execute(
//     `delete from cart
//      WHERE id = ${id}`,
//     (error, result) => {
//       response.send(utils.createResult(error, result))
//     }
//   )
// })


router.delete('/:id', (request, response) => {
  const { id } = request.params
  db.execute(
    `delete from cart
     WHERE id = ${id}`,
    (error, result) => {
      response.send(utils.createResult(error, result))
    }
  )
})









module.exports = router
