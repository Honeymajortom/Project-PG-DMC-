const { request, response } = require('express')
const express = require('express')
const db = require('../../db')
const utils = require('../../utils')
const multer = require('multer')
const upload = multer({dest : 'uploads'})
const router = express.Router()

router.get('/',(request, response)=>{
    const connection = db.openConnection()
    const sql= "select * from menu";
    connection.query(sql,(error,result)=>{
      connection.end
      response.send(utils.createResult(error,result))
    })
  })

  router.get('/image/:menuImage', (request, response) => {
    const { menuImage } = request.params
    const path = __dirname + '/../uploads/' + menuImage
    response.send(fs.readFileSync(path))
  })

  router.post('/addmenu',upload.single('img'),(req,res)=>{
    const {menuName, description, price} = req.body
    const filename = req.file.filename
    const connection = db.openConnection()
    const sql= `insert into menu(menuName,description,price,menuImage) values('${menuName}','${description}','${price}','${filename}')`;
    connection.query(sql,(error,result)=>{
      connection.end
      res.send(utils.createResult(error,result))
    })
  })
module.exports = router