import React from 'react';
import  {Container, Card, Row, Col}  from 'react-bootstrap';

const SiteFooter  = () => {
       return (
            < >
            <Card.Footer className="footer">
                <Container className="padd-50" >
                    <Row className="justify-content">
                        <Col xs lg="12">
                        <p>Footer</p>  
                        </Col>  
                    </Row>
                </Container>
            </Card.Footer>
            </>
        );
    
}

export default SiteFooter;
