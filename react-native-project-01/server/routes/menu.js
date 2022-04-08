const express = require('express')
const router = express.Router()
const db = require('../db')
const utils = require('../utils')
const multer = require('multer')
const upload = multer({ dest: 'images/' })
const fs = require('fs')

// router.get('/', (request, response) => {
//   const { term } = request.query

//   const query = `select * from medicines where title like '%${term}%'`
//   console.log(query)
//   db.execute(query, (error, result) => {
//     console.log(`results`)
//     console.log(result)
//     response.send(utils.createResult(error, result))
//   })
// })

router.get('/', (request, response) => {
  const { term } = request.query

  const query = `select * from menu where title like '%${term}%'`
  console.log(query)
  db.execute(query, (error, result) => {
    console.log(`results`)
    console.log(result)
    response.send(utils.createResult(error, result))
  })
})

// router.get('/', (request, response) => {
//   const query = `select * from menu`
//   console.log(query)
//   db.execute(query, (error, result) => {
//     console.log(`results`)
//     console.log(result)
//     response.send(utils.createResult(error, result))
//   })
// })
















// router.get('/:id', (request, response) => {
//   const { id } = request.params
//   db.execute(`select * from medicines where id = ${id}`, (error, medicines) => {
//     if (medicines.length > 0) {
//       const medicine = medicines[0]

//       // check if the current use has added this medicine into the cart
//       db.execute(
//         `
//           select id
//           from cart 
//           where productId = ${medicine.id} 
//             AND userId = ${request.userId} `,
//         (error, result) => {
//           if (result.length > 0) {
//             // check if user has added this medicine in the cart
//             medicine['cartId'] = result[0]['id']
//           } else {
//             medicine['cartId'] = -1
//           }
//           response.send(utils.createSuccess(medicine))
//         }
//       )
//     } else {
//       response.send(utils.createError('no medicine found'))
//     }
//   })
// })




router.get('/:id', (request, response) => {
  const { id } = request.params
  db.execute(`select * from menu where id = ${id}`, (error, menus) => {
    if (menus.length > 0) {
      const menu = menus[0]

      // check if the current use has added this medicine into the cart
      db.execute(
        `select id
          from cart 
          where productId = ${menu.id} 
            AND userId = ${request.userId} `,
        (error, result) => {
          if (result.length > 0) {
            // check if user has added this medicine in the cart
            menu['cartId'] = result[0]['id']
          } else {
            menu['cartId'] = -1
          }
          response.send(utils.createSuccess(menu))
        }
      )
    } else {
      response.send(utils.createError('no menu found'))
    }
  })
})


router.get('/image/:thumbnail', (request, response) => {
  const { thumbnail } = request.params
  const path = __dirname + '/../images/' + thumbnail
  response.send(fs.readFileSync(path))
})







// router.post('/', upload.single('photo'), (request, response) => {
//   const { title, descr, price, } = request.body
//   console.log(request.body)
//   const thumbnail = request.file.filename
//   const query = `insert into medicines (title, company, price, mrp, unit, thumbnail, expiryDate) values (?, ?, ?, ?, ?, ?, ?)`
//   db.execute(
//     query,
//     [title, company, price, mrp, unit, thumbnail, expiryDate],
//     (error, result) => {
//       response.send(utils.createResult(error, result))
//     }
//   )
// })


router.post('/addmenu', upload.single('photo'), (request, response) => {
  const { title,descr, price } = request.body
  console.log(request.body)
  const thumbnail = request.file.filename
  const query = `insert into menu (title, descr, price, thumbnail) values (?, ?, ?, ?)`
  db.execute(
    query,
    [title,descr, price, thumbnail],
    (error, result) => {
      response.send(utils.createResult(error, result))
    }
  )
})












module.exports = router
