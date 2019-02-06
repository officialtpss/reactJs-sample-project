import React, { Component } from 'react';
import contatBanner from '../assets/images/contact-us-banner.jpg';
import { Container, Col, Row, Card, Image } from 'react-bootstrap';
import { withRouter } from "react-router";

class Contact extends Component {
    componentDidMount() {
        document.title = "Contact Us | ReactJS"
    }
    render() {
        return (
            <>
                <div className="banner"><Image src={contatBanner}></Image></div>
                <Container className="padd-50" >
                    <Row className="justify-content">
                        <Col xs lg="12"><Card.Title>Contact Us</Card.Title> </Col>
                        <Col xs lg="12">
                            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                        </Col>
                        <Col xs lg="12">
                            <p> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default withRouter(Contact);