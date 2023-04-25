import React, { useContext } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Navbar from 'react-bootstrap/esm/Navbar';
import Nav from 'react-bootstrap/esm/Nav';
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { AuthContext } from '../../providers/AuthProvider';


const DragonNavbar = () => {

    const { user } = useContext(AuthContext);

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto">
                <Nav.Link href="#features">
                  <Link to="/">Home</Link>
                </Nav.Link>
                <Nav.Link href="#pricing">About</Nav.Link>
                <Nav.Link href="#career">Career</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">
                  {user && user.displayName}{" "}
                  {user && <FaUserAlt style={{ fontSize: "2rem" }} />}
                </Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  {user ? (
                    <Button variant="secondary">Logout</Button>
                  ) : (
                    <Link to='/login'>
                      <Button variant="secondary">Login</Button>
                    </Link>
                  )}
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    );
};

export default DragonNavbar;