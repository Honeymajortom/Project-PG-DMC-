import React from 'react'
import { Button } from 'react-bootstrap'
import './Home.css'

function Home() {
  return (
    <div>
        <div>
          <header>
            <div>
            {/* <h4 className="Home-welcome">Welcome {firstName}!</h4>
            <Button className="logoutButton" variant="dark" onClick={logoutUser}>Logout</Button> */}
            </div>
          </header>
          {/* <h4 className="Home-subtitle">頂きます</h4> */}
            <h4 className="Home-subtitle">we serve</h4>
            <h3 className="Home-title">Authentic <span className="cont">continental</span> foods</h3>
            <Button className="orderButton" variant="dark">Order</Button>
        </div>



      </div>
  )
}

export default Home