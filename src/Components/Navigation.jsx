import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

function Navigation(){
    return  <Navbar bg="light" className="navp" > {/* You missed expand='lg' */}
                <Container>
                    <Navbar.Brand>KiluaZen</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href='/blog'>Blog</Nav.Link>
                        <Nav.Link href='/about'>About</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
};

export default Navigation;