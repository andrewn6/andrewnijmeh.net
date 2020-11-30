import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/Col';

export default function Footer(props) {
    return(
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p3">
                    <Col className="p=0" md={3} sm={12}>
                        Andrew Nijmeh
                    </Col>
                    <Col classname="p-0 d-flex justify-content-end" md={3}>
                        &copy;2020 Andrew Nijmeh | PineappleRind.
                    </Col>
                </Row>
            </Container>
        </footer>
            
            
        
    );
}

