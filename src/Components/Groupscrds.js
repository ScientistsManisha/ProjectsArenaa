import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import IMG1 from "../Img/image1.jpg";
import IMG2 from "../Img/image2.png";
import IMG3 from "../Img/image3.png";

const Gropscrds = () => {
    return (
        <div>
            <Container>
                <Row>
                    <CardGroup >
                        <Col md="4">
                            <Card style={{ margin: "2rem" }}>
                                <Card.Img variant="top" src={IMG1} style={{ height: "15rem" }}/>
                                <Card.Body>
                                    <Card.Title>PROJECTS</Card.Title>
                                    <Card.Text>
                                        <ul style={{ textAlign: "justify" }}>
                                            <li> ME/M.Tech Projects</li>
                                            <li> BE/B.Tech Projects</li>
                                            <li>BCA/MCA/MBA Projects</li>
                                            <li>Major/Minor Projects</li>
                                            <li>School Projects</li>
                                        </ul>
                                    </Card.Text>
                                    <Button variant="dark">Read More</Button>
                                </Card.Body>

                            </Card>
                        </Col>

                        <Col md="4">
                            <Card style={{ margin: "2rem" }}>
                                <Card.Img variant="top" src={IMG2} style={{ height: "15rem" }} />
                                <Card.Body>
                                    <Card.Title>TRAINING & LEARNING</Card.Title>
                                    <Card.Text>
                                        <ul style={{ textAlign: "justify" }}>
                                            <li> ME/M.Tech Projects</li>
                                            <li> BE/B.Tech Projects</li>
                                            <li>BCA/MCA/MBA Projects</li>
                                            <li>Major/Minor Projects</li>
                                            <li>School Projects</li>
                                        </ul>
                                    </Card.Text>
                                    <Button variant="dark">Read More</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md="4">
                            <Card style={{ margin: "2rem" }}>
                                  
                                <Card.Img variant="top" src={IMG3}  style={{ height: "15rem" }}/>
                                <Card.Body>
                                    <Card.Title>Matlab Training</Card.Title>
                                    <Card.Text>
                                        <ul style={{ textAlign: "justify" }}>
                                            <li>Website Design & Deve-lopment</li>
                                            <li>Software Design</li>
                                            <li>Data Migration</li>
                                            <li>Article Writing</li>
                                            <li>Mail & SMS Services</li>
                                        </ul>
                                    </Card.Text>
                                    <Button variant="dark">Read More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </CardGroup>
                </Row>
            </Container>
            
        </div>
    )
}

export default Gropscrds
