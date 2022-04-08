const express = require('express')
const db = require('../../db')
const utils = require('../../utils')



// router which helps user module to add all the routes to the main app
const router = express.Router()

router.get('/cartcontent/:userid', (request, response) => {
  const connection = db.openConnection()
  const { userid }= request.params
  connection.query(
    `select c.cartid, c.quantity, m.menuid, m.menuName, m.description, m.price, m.menuImage 
      from cart c inner join menu m on c.menuid = m.menuid where c.userid = ${userid}`,
    (error, items) => {
      response.send(utils.createResult(error, items))
      console.log(items)
      connection.end()
    })
})

router.post('/addtocart/:menuid/:userid', (request, response) => {
  const connection = db.openConnection()
  const { menuid, userid } = request.params
  const price = request.body.price;
  console.log(price + " "+menuid + " ")
  //const { quantity } = request.body
  
  connection.query(
    //`select price from menu where menuid = ${menuid}`,
    
    `insert into cart (menuid, userid, quantity,price) values (${menuid}, ${userid}, 1,${price})`,
    (error, items) => {
      response.send(utils.createResult(error, items))
      console.log(items)
      connection.end()
    })
})

router.get('/getMenuDetailsByMenuId/:menuid',(request,response)=>{
  const connection = db.openConnection()
  const menuid = request.params.menuid
  console.log(menuid)

  connection.query(`select * from menu where menuid=${menuid}`,(error,result)=>{
    response.send(utils.createResult(error,result));
    console.log(result)
    connection.end()
  })
})

router.put('/updatecart/:cartid', (request, response) => {
  const connection = db.openConnection()
  const { cartid } = request.params
  const { quantity , totalamount } = request.body
  connection.query(
    `update cart
        set quantity = ${quantity} ,totalamount = ${totalamount}
     WHERE
        cartid = ${cartid}`,
    (error, result) => {
      response.send(utils.createResult(error, result))
      connection.end()
    })
})

router.delete('/deletefromcart/:cartid', (request, response) => {
  const connection = db.openConnection()
  const { cartid } = request.params
  connection.query(
    `delete from cart
     WHERE cartid = ${cartid}`,
    (error, result) => {
      response.send(utils.createResult(error, result))
      connection.end()
    })
})


module.exports = router