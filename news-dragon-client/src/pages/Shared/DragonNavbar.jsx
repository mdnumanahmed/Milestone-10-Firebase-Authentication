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
                  <Link className='nav-link' to="/">Home</Link>
                  <Link className='nav-link' to="/about">About</Link>
                  <Link className='nav-link' to="/career">Career</Link>
              </Nav>
              <Nav>
                <Link className='nav-link' href="#deets">
                  {user && user.displayName}{" "}
                  {user && <FaUserAlt style={{ fontSize: "2rem" }} />}
                </Link>
                <span className='nav-link' href="#memes">
                  {user ? (
                    <Button variant="secondary">Logout</Button>
                  ) : (
                    <Link to='/login'>
                      <Button variant="secondary">Login</Button>
                    </Link>
                  )}
                </span>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    );
};

export default DragonNavbar;