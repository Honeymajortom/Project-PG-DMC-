const { request, response } = require('express')
const express = require('express')
const db = require('../../db')
const utils = require('../../utils')
const multer = require('multer')
const upload = multer({dest : 'uploads'})

const router = express.Router()

router.get('/',(req,res)=>{
  const connection = db.openConnection()
  const sql= "select * from menu";
  connection.query(sql,(error,result)=>{
    connection.end
    res.send(utils.createResult(error,result))
  })
})

  router.post('/addmenu',upload.single('img'),(req,res)=>{
    const {menuName, description, price} = req.body
    const filename = req.file.filename
    const connection = db.openConnection()
    const sql= `insert into menu(menuid,menuName,description,price,menuImage) values('${menuName}','${description}','${price}','${filename}')`;
    connection.query(sql,(error,result)=>{
      connection.end
      res.send(utils.createResult(error,result))
    })
  })

module.exports = router