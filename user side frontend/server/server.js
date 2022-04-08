const express = require('express')
const cors = require('cors')



//User
// const routerUser = require('./routes/User/user')
// const routerUserSignup = require('./routes/User/user')
// const routerUserSignin = require('./routes/User/user')
const RouterUser = require('./routes/User/user')
const routerAddress = require('./routes/User/address')
const routerCart = require('./routes/User/cart')
const routerOrders = require('./routes/User/myorders')
const routerMenu = require('./routes/User/menu')
//Admin
const routerAddMenu = require('./routes/Admin/addmenu')
const routerDeleteMenu = require('./routes/Admin/deletemenu')
const routerEditMenu = require('./routes/Admin/editmenu')
const routerOrder = require('./routes/Admin/orders')
const routerSignin = require('./routes/Admin/signin')
// const routerSignup = require('./routes/Admin/signup')
const routerViewMenu = require('./routes/Admin/viewMenu')

const app = express()


// enable CORS (Cross Origin Resource Sharing)
// needed for client to call the apis from different url
app.use(cors('*'))

app.use(express.json())

//user
// app.use('/user',routerUser)
// app.use('/user1',routerUserSignin)
// app.use('/user/signup',routerUserSignup)
app.use('/user',RouterUser)
app.use('/cart',routerCart)
app.use('/address',routerAddress)
app.use('/myorders',routerOrders)
app.use('/menu',routerMenu)


//admin
app.use('/addmenu',routerAddMenu)
app.use('/deletemenu',routerDeleteMenu)
app.use('/editmenu',routerEditMenu)
app.use('/orders',routerOrder)
app.use('/signin',routerSignin)
// app.use('/signup',routerSignup)
app.use('/viewMenu',routerViewMenu)
app.use(express.static("./uploads"))

app.listen(4000, '0.0.0.0', () => {
    
    console.log(`server started on port 4000`)
})
