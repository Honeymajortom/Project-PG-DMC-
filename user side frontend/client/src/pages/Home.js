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
          
          <h3 className="Home-title">Obento o Tabemasu</h3>
           <h4 className="Home-subtitle">頂きます</h4>
        </div>
      </div>
)}

export default Home
