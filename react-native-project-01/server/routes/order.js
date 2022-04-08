const express = require('express')
const router = express.Router()
const db = require('../db_async')
const utils = require('../utils')
const notifications = require('../notifications')
const mailer = require('../mailer')
const fs = require('fs')

// router.get('/', (request, response) => {
//   ;(async () => {
//     const [orders] = await db.execute(
//       `select * from orders where userId = ${request.userId}`
//     )

//     // get products for every order
//     for (const order of orders) {
//       const [products] = await db.execute(
//         `select od.quantity, m.id, m.title, m.company, od.price, m.thumbnail from OrderDetails od, medicines m where orderId = ${order.id} and od.medicineId = m.id`
//       )
//       order['products'] = products
//     }

//     response.send(utils.createSuccess(orders))
//   })()
// })


// router.get('/', (request, response) => {
//   ;(async () => {
//     const [orders] = await db.execute(
//       `select * from orders where userId = ${request.userId}`
//     )

//     // get products for every order
//     for (const order of orders) {
//       const [products] = await db.execute(
//         `select od.quantity, m.id, m.title, m.descr, od.price, m.thumbnail from OrderDetails od, 
//         menu m where orderId = ${order.id} and od.menuId = m.id`
//       )
//       order['products'] = products
//     }

//     response.send(utils.createSuccess(orders))
//   })()
// })

router.get('/', (request, response) => {
  ;(async () => {
    const [orders] = await db.execute(
      `select * from orders where userId = ${request.userId}`
    )
       // get products for every order
       for (const order of orders) {
        console.log(order)
       const [products] = await db.execute(
        `select od.quantity, m.id, m.title, m.descr, od.price, m.thumbnail from OrderDetails od, 
        menu m where orderId = ${order.id} and od.menuId = m.id`
      )
      order['products'] = products
    
    }

    response.send(utils.createSuccess(orders))
  })()
})

// router.post('/', (request, response) => {
//   ;(async () => {
//     console.log(request.body)
//     const { total, products } = request.body
//     console.log(request.userId)
//  // insert order
//     const [result] = await db.execute(`
//       insert into orders 
//         (userId, total, status) 
//       values
//         (${request.userId}, ${total}, ${"200"});
//     `)

//     // get the newly inserted records' id
//     // insert order details
//     const orderId = result.insertId
//     for (const product of products) {
//       await db.execute(`
//         insert into orderDetails 
//           (mobileImei, orderId, quantity, price, total,userId)
//         values
//           (${product.productId}, ${orderId}, ${product.quantity}, ${product.price}, ${product.total},${request.userId})
//       `)
//     }


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
        (userId, total, status, paymentMode) 
      values
        (${request.userId}, ${total}, 100, "COD");
    `)

    // get the newly inserted records' id
    // insert order details
    const orderId = result.insertId
    for (const product of products) {
      await db.execute(`
        insert into orderDetails 
          (menuId, orderId, quantity, price)
        values
          (${product.id}, ${orderId}, ${product.quantity}, ${product.price})`
          )
    }

    // remove the items from cart
    await db.execute(`delete from cart where userId = ${request.userId}`)

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































// const express = require('express')
// const router = express.Router()
// const db = require('../db_async')
// const utils = require('../utils')
// const notifications = require('../notifications')
// const mailer = require('../mailer')
// const fs = require('fs')

// router.get('/', (request, response) => {
//   ;(async () => {
//     const [orders] = await db.execute(
//       `select * from orders where userId = ${request.userId}`
//     )

//     // get products for every order
//     for (const order of orders) {
//       const [products] = await db.execute(
//         `select od.quantity, p.id, p.title, p.category, od.price, p.thumbnail from OrderDetails od, product p where orderId = ${order.id} and od.productId = p.id`
//       )
//       order['products'] = products
//     }

//     response.send(utils.createSuccess(orders))
//   })()
// })

// // router.post('/', (request, response) => {
// //   ;(async () => {
// //     console.log(request.body)
// //     const { total, products } = request.body

// //     // status:
// //     // 100: placed
// //     // 200: confirmed
// //     // 300: dispatched
// //     // 400: out for delivery
// //     // 500: delivered
// //     // 600: cancelled

// //     // insert order
// //     const [result] = await db.execute(`
// //       insert into orders 
// //         (userId, total, status) 
// //       values
// //         (${request.userId}, ${total}, ${200});
// //     `)

// //     // get the newly inserted records' id
// //     // insert order details
// //     const orderId = result.insertId
// //     for (const product of products) {
// //       await db.execute(`
// //         insert into orderDetails 
// //           (productId, orderId, quantity, price, total)
// //         values
// //           (${productId}, ${orderId}, ${quantity}, ${price}, ${total})
// //       `)
// //     }

// //     // remove the items from cart
// //     await db.execute(`delete from cart where userId = ${request.userId}`)

// //     const productTitles = products.map((item) => item.title).join('\n')

// //     //console.log(`sending FCM`)

// //     // send notifications
// //     // notifications.sendFCM(
// //     //   'new order confirmed!!!',
// //     //   'Congrats!!! your order is confirmed. Following are your medicines.\n' +
// //     //     productTitles,
// //     //   (error, result) => {
// //     //     let rows = ''
// //     //     let index = 1
// //     //     for (const product of products) {
// //     //       rows += `<tr>
// //     //         <td>${index}</td>
// //     //         <td>${product['title']}</td>
// //     //         <td>${product['price']}</td>
// //     //         <td>${product['quantity']}</td>
// //     //         <td>${product['price'] * product['quantity']}</td>
// //     //       </tr>`
// //     //     }

// //     //     console.log(`sending email....`)

// //     //     // read the contents of the place_order.html file
// //     //     let contents =
// //     //       '' + fs.readFileSync(__dirname + '/../templates/place_order.html')
// //     //     contents = contents.replace('{{username}}', request.userName)
// //     //     contents = contents.replace('{{rows}}', rows)
// //     //     mailer.sendEmail(
// //     //       request.userEmail,
// //     //       'New order',
// //     //       contents,
// //     //       (error, result) => {
// //     //         console.log(error)
// //     //         console.log(result)
// //     //         response.send(utils.createSuccess('done'))
// //     //       }
// //     //     )
// //     //   }
// //     // )
// //     response.send(utils.createSuccess(products))
// //   })()
// // })

// router.post('/', (request, response) => {
//   ;(async () => {
//     console.log("aaa")
//     console.log(request.body)
//     const { total, products } = request.body
//     console.log(products)


    
//     // insert order
//     const [result] = await db.execute(`
//       insert into orders 
//         (userId, total, status, paymentMode) 
//       values
//         (${request.userId}, ${total}, ${200}, "COD");
//     `)

//     // get the newly inserted records' id
//     // insert order details
//     const orderId = result.insertId
//     for (const product of products) {
//       const total = product.quantity * product.price
  
//       await db.execute(`
//         insert into orderDetails 
//           (productId, orderId, quantity, price, total)
//         values
//           (${product.id}, ${orderId}, ${product.quantity}, ${product.price}, ${total})
//       `
//       )
//     }
  
//     // remove the items from cart
//     await db.execute(`delete from cart where userId = ${request.userId}`)

//     const productTitles = products.map((item) => item.model).join('\n')

//     //send notifications
//     notifications.sendFCM(
//       'new order confirmed!!!',
//       'Congrats!!! your order is confirmed. Following are the details :\n' +
//         productTitles,
//       (error, result) => {
//         let rows = ''
//         let index = 1
//         for (const product of products) {
//           rows += `<tr>
//             <td>${index}</td>
//             <td>${product['model']}</td>
//             <td>${product['price']}</td>
//             <td>${product['quantity']}</td>
//             <td>${product['price'] * product['quantity']}</td>
//           </tr>`
//         }

//         console.log(`sending email....`)

//         // read the contents of the place_order.html file
//         let contents =
//           '' + fs.readFileSync(__dirname + '/../templates/place_order.html')
//         contents = contents.replace('{{username}}', request.userName)
//         contents = contents.replace('{{rows}}', rows)
//         mailer.sendEmail(
//           request.userEmail,
//           'New order',
//           contents,
//           (error, result) => {
//             console.log(error)
//             console.log(result)
//             response.send(utils.createSuccess('done'))
//           }
//         )
//       }
//     )
//   })()
// })

// module.exports = router
