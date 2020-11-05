import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/Col';

function Footer(){
    return(
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p3">
                    <Col className="p=0" md={3} sm={12}>
                        Andrew Nijmeh
                    </Col>
                    <Col classname="p-0 d-flex justify-content-end" md={3}>
                    This site was made by Andrew Nijmeh.
                    </Col>
                </Row>
            </Container>
        </footer>
            
            
        
    );
}