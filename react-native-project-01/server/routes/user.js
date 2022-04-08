const express = require('express')
const router = express.Router()
const db = require('../db')
const utils = require('../utils')
//const cryptoJs = require('crypto-js')
const jwt = require('jsonwebtoken')
const config = require('../config')

router.post('/signup', (request, response) => {
  const { firstName, lastName, email, password } = request.body
  db.execute(
    `insert into user (firstName, lastName, email, password) values (?, ?, ?, ?)`,
    [firstName, lastName, email, password],
    (error, result) => {
      response.send(utils.createResult(error, result))
    }
  )
})

router.post('/signin', (request, response) => {
  const { email, password } = request.body
  console.log(request.body)

  db.execute(
    `select id, firstName, lastName, email, password from user where email = ? and password = ?`,
    [email, password],
    (error, users) => {
      if (error) {
        response.send(utils.createError(error))
      } else if (users.length == 0) {
        response.send(utils.createError('user does not exist'))
      } else {
        const user = users[0]
        const token = jwt.sign(
          {
            id: user.id,
            name: user.firstName + ' ' + user.lastName,
            email: user.email,
          },
          config.secret
        )

        response.send(
          utils.createSuccess({
            token,
            name: user.firstName + ' ' + user.lastName,
          })
        )
      }
    }
   
  )

})


router.put('/', (request, response) => {
  const { firstName, lastName, email } = request.body
  const { userId } = request.userId

 console.log(request.id)
 console.log("testing..")
  db.execute(
    `update user set
    firstName = '${firstName}',
    lastName='${lastName}',
    email='${email}'
    where id= ${request.userId}`,
    //[firstName, lastName,+ cryptoJs.MD5(password)],
    (error, data) => {
      response.send(utils.createResult(error, data))
    }
  )
})


module.exports = router




