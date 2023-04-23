import React from "react";
import Button from "react-bootstrap/esm/Button";
import ListGroup from "react-bootstrap/esm/ListGroup";
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import QZone from "./QZone";
import Poster from "./Poster";

const RightNav = () => {
  return (
    <div>
      <div className="mb-5">
        <h4>Login with</h4>
        <Button className="mb-2" variant="outline-primary">
          <FaGoogle /> Login with Google
        </Button>
        <Button variant="outline-primary">
          <FaGithub /> Login with Github
        </Button>
      </div>
      <div className="mb-5">
        <h4>Find Us On</h4>
        <ListGroup>
          <ListGroup.Item> <FaFacebook/> Facebook </ListGroup.Item>
          <ListGroup.Item> <FaTwitter /> Twitter</ListGroup.Item>
          <ListGroup.Item> <FaInstagram /> Instagram</ListGroup.Item>
        </ListGroup>
      </div>
      <div className="bg-secondary p-3">
        <QZone />
      </div>
      <div className="my-3">
        <Poster />
      </div>
    </div>
  );
};

export default RightNav;
