import React from "react";
import logo from "../../assets/logo.png";
import moment from "moment";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Marquee from "react-fast-marquee";

const Header = () => {
  
  return (
    <div>
      <Container>
        <div className="text-center">
          <img src={logo} alt="" />
          <p>
            <small>Journalism Without Fear or Favour</small>
          </p>
          <p>{moment().format("dddd, MMMM DD, YYYY")}</p>
        </div>
        <div className="bg-light p-2 d-flex">
          <Button variant="danger">Latest</Button>
          <Marquee>
            I can be a React component, multiple React components, or just some
            text. * I can be a React component, multiple React components, or
            just some text.
          </Marquee>
        </div>
        
      </Container>
    </div>
  );
};

export default Header;
