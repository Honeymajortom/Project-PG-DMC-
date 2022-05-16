import React from 'react'
import { Navbar,Nav,Container,NavDropdown} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'

function NavBar() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <LinkContainer to="/Home"><Navbar.Brand>Bento.</Navbar.Brand></LinkContainer>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <LinkContainer to="/Home"><Nav.Link>home</Nav.Link></LinkContainer>
                            <LinkContainer to="/OrderTiffin"><Nav.Link>orders</Nav.Link></LinkContainer>
                            <LinkContainer to="/ViewMenu"><Nav.Link>menu</Nav.Link></LinkContainer>
                            <LinkContainer to="/Cart"><Nav.Link>cart</Nav.Link></LinkContainer>
                            <LinkContainer to="/Signup"><Nav.Link>sign up</Nav.Link></LinkContainer>
                            <LinkContainer to="/Signin"><Nav.Link>log in</Nav.Link></LinkContainer>
                           
                        </Nav>
                    </Navbar.Collapse>
                 </Container>
            </Navbar>
        </div>
    )
}

export default NavBar
