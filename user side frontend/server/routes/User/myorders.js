const express = require('express')
const router = express.Router()
//const db = require('../db_async')
//const utils = require('../utils')
//const notifications = require('../notifications')
//const mailer = require('../mailer')
//const fs = require('fs')

router.get('/', (request, response) => {
  ;(async () => {
    const [orders] = await db.execute(
      `select * from orders where userid = ${request.userid}`
    )

    // get products for every order
    for (const order of orders) {
      const [products] = await db.execute(
        `select od.quantity, m.menuid, m.menuName, od.price, from orderDetails od, menu m where orderid = ${order.orderid} and od.menuid = m.id`
      )
      order['menus'] = menus
    }

    response.send(utils.createSuccess(orders))
  })()
})

router.post('/', (request, response) => {
  ;(async () => {
    console.log(request.body)
    const { total, products } = request.body

    // status:
    // 100: placed
    // 200: confirmed
    // 300: dispatched
    // 400: out for delivery
    // 500: delivered
    // 600: cancelled

    // insert order
    const [result] = await db.execute(`
      insert into orders 
        (userid, totalamount, status) 
      values
        (${request.userid}, ${totalamount}, ${200});
    `)

    // get the newly inserted records' id
    // insert order details
    const orderid = result.insertId
    for (const menu of menus) {
      await db.execute(`
        insert into orderDetails 
          (menuid, orderid, quantity, price, totalamount)
        values
          (${menu.menuid}, ${orderid}, ${menu.quantity}, ${menu.price}, ${menu.totalamount})
      `)
    }

    // remove the items from cart
    await db.execute(`delete from cart where userid = ${request.userid}`)

    const productTitles = products.map((item) => item.title).join('\n')

    console.log(`sending FCM`)

    // send notifications
    notifications.sendFCM(
      'new order confirmed!!!',
      'Congrats!!! your order is confirmed. Following are your medicines.\n' +
        productTitles,
      (error, result) => {
        let rows = ''
        let index = 1
        for (const product of products) {
          rows += `<tr>
            <td>${index}</td>
            <td>${product['title']}</td>
            <td>${product['price']}</td>
            <td>${product['quantity']}</td>
            <td>${product['price'] * product['quantity']}</td>
          </tr>`
        }

        console.log(`sending email....`)

        // read the contents of the place_order.html file
        let contents =
          '' + fs.readFileSync(__dirname + '/../templates/place_order.html')
        contents = contents.replace('{{username}}', request.userName)
        contents = contents.replace('{{rows}}', rows)
        mailer.sendEmail(
          request.userEmail,
          'New order',
          contents,
          (error, result) => {
            console.log(error)
            console.log(result)
            response.send(utils.createSuccess('done'))
          }
        )
      }
    )
  })()
})

module.exports = router