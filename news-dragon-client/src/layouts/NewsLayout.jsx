import React from 'react';
import Header from '../pages/Shared/Header';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { Outlet } from 'react-router-dom';
import RightNav from '../pages/Shared/RightNav';

const NewsLayout = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={9}>
                        <Outlet />
                    </Col>
                    <Col lg={3}>
                        <RightNav />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NewsLayout;