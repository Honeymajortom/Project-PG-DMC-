import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router";
import { toast } from 'react-toastify'
import { Card,Button } from 'react-bootstrap'
import './ViewMenu.css'


function ViewMenu() {
  const { userid } = sessionStorage;
  const navigate = useNavigate();
  const [price, setPrice] = useState('') 
  const [menuid, setMenuid] = useState('') 
  //const [cartid, setCartid] = useState('')
  const [menus, setMenus] = useState([])
     

        const searchMenu = () => {
          axios.get(`http://localhost:4000/menu`).then((response) => {
            const result = response.data;
            if (result["status"] === "success") {
              setMenus(result["data"]);
              //get the data sent by server
              console.log("Result: ",result)
              const { menuid, menuName, description, menuImage } = result["data"][0];
              console.log(response.data)

              // persist the logged in user's information for future use
              sessionStorage["menuid"] = menuid;
              sessionStorage["menuName"] = menuName;
              sessionStorage["description"] = description;
              sessionStorage["menuImage"] = menuImage;
              sessionStorage["loginStatus"] = 1;
            } else {
              toast.error(result["error"]);
            }
          })
        }

        
        const addToCart = (menuid) => {
          console.log(menuid)
          console.log(userid)
          
          axios.get(`http://localhost:4000/cart/getMenuDetailsByMenuId/${menuid}`).then((response)=>{
            const result = response.data;
            console.log(result)
            console.log(result.data[0].price)
            setPrice(result.data[0].price)
          })
          const data = { price : price }
          axios.post(`http://localhost:4000/cart/addtocart/${menuid}/${userid}`,data).then((response) => {
            console.log("shendi@123")
            const result = response.data
            if (result['status'] == 'success') {
              toast.success('item added to cart')
              searchMenu()
            } else {
              toast.error(result['error'])
            }
          })
        }

        useEffect(() => {
          searchMenu();
          console.log("getting called");
        }, []);

         return(
          <div className="wrapper">    
            <h1>Menu</h1>
            <h4>Select food items</h4> 
              <div className="container-card">
                {menus.map((item)=>{
                  return(
                    <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={'http://localhost:4000/' + item.menuImage} alt="" className="thumbnail-sm" />
                      <Card.Body>
                      <Card.Title>{item.menuName}</Card.Title>
                      <Card.Text>{item.description}</Card.Text>
                      <Card.Text className="price">&#8377;{item.price}</Card.Text>
                     {()=>{
                       setMenuid(item.menuid)
                     }}
                      <Button variant="primary" onClick={() => addToCart(item.menuid)} className="add-to-cart">Add to cart</Button>
                      </Card.Body>
                    </Card>
                  )})}
              </div>
          </div>
         )}

export default ViewMenu
