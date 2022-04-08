
const express = require('express')
const db = require('../../db')
const utils = require('../../utils')


const router = express.Router()
console.log("in User pager")

router.get('/test',(request,response)=>{
  response.send("testsAPI")
})

router.post('/signup', (request, response) => {
    const { firstname, password, lastname, email } = request.body
    const connection = db.openConnection()
  
    // check if the email sent by user already exists in the table
    const emailStatement = `select email from user where email = '${email}'`
    connection.query(emailStatement, (error, emails) => {
      if (error) {
        // if error is generated while executing the query
        response.send(utils.createResult(error))
      } else {
        if (emails.length == 0) {
          // encrypt the password
          // const encryptedPassword = cryptoJs.SHA512(password)
  
          // there is no user registered with this email
          const statement = `
          insert into user
            (firstname, lastname, email, password)
          values
            ('${firstname}', '${lastname}', '${email}', '${password}')
        `
          connection.query(statement, (error, result) => {
            connection.end()
            response.send(utils.createResult(error, result))
          })
        } else {
          // at least one user exists with this email address
          connection.end()
          response.send(
            utils.createResult('email address already exists, please use another')
          )
        }
      }
    })
  })

  router.post('/signin', (request, response) => {
    console.log("Iside login")
    const { email, password } = request.body
  
    const connection = db.openConnection()
  
    // encrypt the password
    //const encryptedPassword = cryptoJs.SHA512(password)
  
    const statement = `
    select 
      userid, firstname, lastname from user 
    where 
      email = '${email}' and 
      password = '${password}'`
  
    connection.query(statement, (error, users) => {
      connection.end()
  
      if (error) {
        response.send(utils.createResult(error))
      } else if (users.length == 0) {
        // there is no user matching the criteria
        response.send(utils.createResult('user not found'))
      } else {
        const user = users[0]
        response.send(utils.createResult(null, user))
      }
    })
  })




//update
router.put('/update/:userid',(request,response) => {
    
    const{ userid } = request.params
    const{ firstname,lastname,email,mobile,password }=request.body
    console.log(mobile)
    const connection = db.openConnection()
    const statement =`
    update user 
        set firstname ='${firstname}',
        lastname ='${lastname}',
        email ='${email}',
        mobile ='${mobile}', 
        password ='${password}'
        where userid = ${userid}
    `

    connection.query(statement,(error,result) => {
        connection.end()
        response.send(utils.createResult(error, result))
        response.send("update success")
    })
})
module.exports = router