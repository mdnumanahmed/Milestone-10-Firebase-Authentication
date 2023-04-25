import React from "react";
import Header from "../pages/Shared/Header";
import Footer from "../pages/Shared/Footer";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftNav from "../pages/Shared/LeftNav";
import RightNav from "../pages/Shared/RightNav";
import { Outlet } from "react-router-dom";
import DragonNavbar from "../pages/Shared/DragonNavbar";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <DragonNavbar></DragonNavbar>
      <Container>
        <Row>
          <Col lg={3}>
            <LeftNav></LeftNav>
          </Col>
          <Col lg={6}>
            <Outlet />
          </Col>
          <Col lg={3}>
            <RightNav></RightNav>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
