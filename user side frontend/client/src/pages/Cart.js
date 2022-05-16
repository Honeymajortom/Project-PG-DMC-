import React from 'react'
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Card, Button } from 'react-bootstrap'
import './Cart.css'




function Cart() {

  const { userid } = sessionStorage;
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);
  const [totalamount, setTotalAmount] = useState([]);
  const [sum, setSum] = useState();
  const [menuid, setMenuid] = useState('')
  const [cartid, setCartid] = useState('')

  const navigate = useNavigate();


  const viewCart = () => {
    axios.get(`http://localhost:4000/cart/cartcontent/${userid}`).then((response) => {
      const result = response.data
      if(result['status'] == 'success'){
        setCart(result["data"])
        console.log("Result:", result)
        let { cartid, menuName, description, menuImage, quantity, price, menuid } = result["data"][0];
        console.log(response.data)
        // persist the logged in user's information for future use
        sessionStorage["cartid"] = cartid;
        sessionStorage["menuName"] = menuName;
        sessionStorage["description"] = description;
        sessionStorage["menuImage"] = menuImage;
        sessionStorage["quantity"] = quantity;
        sessionStorage["price"] = price;
        sessionStorage["menuid"] = menuid;
        sessionStorage["loginStatus"] = 1;
        toast.success('edit your items')
      } else {
        toast.error(result['error'])
      }
    })
  }

  const deleteFromCart = (cartid) => {
    axios.delete(`http://localhost:4000/cart/deletefromcart/${cartid}`).then((response) => {
      const result = response.data
      if(result['status'] == 'success') {
        toast.success('menu deleted')
        viewCart()
      } else {
        toast.error(result['error'])
      }
    })
  }

  const decrement = (item) => {
    axios.put(`http://localhost:4000/cart/updatecart/${cartid}`).then((response) => {
      const result = response.data
      if(result['status'] == 'success') {
        toast.success('quantity decreased')

        setQuantity(item.quantity = item.quantity - 1)
        item.totalamount = item.quantity * item.price
        setTotalAmount(item.totalamount)

        viewCart()
      } else {
        toast.error(result['error'])
      }
    })
  }

  const increment = (item, cartid) => {

    setQuantity(item.quantity = item.quantity + 1)
    item.totalamount = item.quantity * item.price
    setTotalAmount(item.totalamount)
    
    const data = { quantity:quantity , totalamount:totalamount }
    axios.put(`http://localhost:4000/cart/updatecart/${cartid}`,data).then((response) => {
      const result = response.data
      console.log(result)
      if(result['status'] == 'success') {
        toast.success('quantity increased')
      

        

        viewCart()
      } else {
        toast.error(result['error'])
      }
    })
  }




  useEffect(() => {
    console.log(`cart component got loaded`)
    viewCart()
  }, [])


  return (
    <div className="wrapper">
        <h1>cart items</h1>
        <div className="container-card">
                {cart.map((item)=>{
                  return(
                    <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={'http://localhost:4000/' + item.menuImage} alt="" className="thumbnail-sm" />
                      <Card.Body>
                      <Card.Title>{item.menuName}</Card.Title>
                      <Card.Text>{item.description}</Card.Text>
                      <Card.Text className="price">&#8377;{item.price}</Card.Text>
                      <div className="grid-button-container">
                        <Button variant="danger" className="decrement" onClick={() => decrement(item)}>-</Button>
                        <Card.Text className="quantity">{item.quantity}</Card.Text>
                        <Button variant="success" className="increment" onClick={() => increment(item)}>+</Button>
                      </div>
                     {()=>{
                       setMenuid(item.menuid)
                     }}
                     
                      <Button variant="danger" onClick={() => deleteFromCart(item.cartid)}>Delete</Button>
                      </Card.Body>
                    </Card>
                  )}
                )}
              </div>
              
              <h6 type="text">{totalamount}</h6>


    </div>
)}

export default Cart