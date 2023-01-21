import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Cards = () => {
  return (
    <div>
      <Container style={{padding:"100px"}}>
        <Row className="justify-content-md-center">
          <Col md="3" sm>
            <h2>Matlab Training</h2>
            <p style={{ textAlign: "justify" }}>DSTARENA is one of the best MATLAB training institutes in Bhopal. If you are looking for a professional trainer in MATLAB training, so you welcome here.</p>
            <Button variant="dark">Read More</Button>
          
          </Col>
          <Col md="3">
            <h2>Website design</h2>
            <p style={{ textAlign: "justify" }}>We Provide training in website design on live projects. It includes HTML, CSS, PHP/MYSQL and its Advance part includes SEO, Wordpress CMS, and JavaScript..</p>
            <Button variant="dark">Read More</Button>
          </Col>
          <Col md="3">
            <h2>Embedded system</h2>
            <p style={{ textAlign: "justify" }}>We provide electronic products design and training to students. This training contains study of microcontroller & microprocessor.</p>
            <Button variant="dark">Read More</Button>
          </Col>
          <Col md="3">
            <h2>Matlab Training</h2>
            <p style={{ textAlign: "justify" }}>It is the institute to learn ROBOTICS. During robotics training we show you, how to make robots; we also do the designing and implementation of robots...</p>
            <Button variant="dark">Read More</Button>
          </Col>
        </Row>
      </Container>
    </div >
  )
}

export default Cards
