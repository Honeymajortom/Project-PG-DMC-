const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const jwt = require('jsonwebtoken')
const config = require('./config')
const utils = require('./utils')

// create a server
const app = express()
app.use(morgan('combined'))
app.use(cors('*'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// adding middleware to extract the currently logged user
app.use((request, response, next) => {
  // check if we need any token for this request
  if (
    request.url == '/user/signup' ||
    request.url == '/user/signin' ||
    request.url.startsWith('/menu/image/')
  ) {
    console.log(`token not needed`)
    next()
  } else {
    const token = request.headers['token']
    console.log(token)
    try {
      // validating the token
      const data = jwt.verify(token, config.secret)

      // add the user details to the request so that every module can access the current user
      request.userId = data.id
      request.userName = data.name
      request.userEmail = data.email

      // call the main route
      next()
    } catch (ex) {
      response.send(utils.createError('invalid token'))
    }
  }
})

// add routes
const routerUser = require('./routes/user')
const routerMenu = require('./routes/menu')
const routerOrder = require('./routes/order')
const routerCart = require('./routes/cart')
const routerReminder = require('./routes/reminder')
const routerAddress = require('./routes/address')

app.use('/user', routerUser)
app.use('/menu', routerMenu)
app.use('/order', routerOrder)
app.use('/cart', routerCart)
app.use('/address', routerAddress)
app.use('/reminder', routerReminder)


app.use(express.static("./uploads"))


// start the server
app.listen(4000, '0.0.0.0', () => {
  console.log(`server started on 4000`)
})
