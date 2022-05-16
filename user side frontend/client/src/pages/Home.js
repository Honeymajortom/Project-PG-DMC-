import { useNavigate } from 'react-router'
import { Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { URL } from '../config'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  // get the logged in user's information
  const { userid, firstname, lastname } = sessionStorage
  const navigate = useNavigate()

  useEffect(() => {
    
    console.log('getting called')
  }, [])

  const logoutUser = () => {
    // remove the logged users details from session storage
    sessionStorage.removeItem('userid')
    sessionStorage.removeItem('firstname')
    sessionStorage.removeItem('lastname')
    sessionStorage.removeItem('loginStatus')

    // navigate to sign in component
    navigate('/signin')
  }

  return (
    <div>
        <div>
          <header>
            <div>
            <h4 className="Home-welcome">Welcome {firstname}!</h4>
            <Button className="logoutButton" variant="dark" onClick={logoutUser}>Logout</Button>
            </div>
          </header>
          {/* <h4 className="Home-subtitle">頂きます</h4> */}
            <h4 className="Home-subtitle">we serve</h4>
            <h3 className="Home-title">Authentic <span className="cont">continental</span> foods</h3>
            <Button className="orderButton" variant="dark">Order</Button>
        </div>



      </div>
)}

export default Home
