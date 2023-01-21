import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Cards = () => {
  return (
    <div>
      <Container style={{paddingRight:"100px",paddingLeft:"100px"}}>
        <Row className="justify-content-md-center">
          <Col md="3">
            <h2>ME/M.tech Thesis</h2>
            <p style={{ textAlign: "justify" }}>It is the best Institute that provides proper guidance in complete research and Thesis work. It provides Thesis for ME/M.Tech/PHD in...</p>
            <Button variant="dark">Read More</Button>
          </Col>
          <Col md="3">
            <h2>Android Training</h2>
            <p style={{ textAlign: "justify" }}>We provide android training to students with live projects & great experience durin-g the training program. This Course includes android OS, Compone-nts, android..</p>
            <Button variant="dark">Read More</Button>
          </Col>
          <Col md="3">
            <h2>SEO Training</h2>
            <p style={{ textAlign: "justify" }}>DSTARENA is an org-anization which is prov-ides a great train-ing in SEO. During training, we also show how to use SEO to increase product visibi-lity.</p>
            <Button variant="dark">Read More</Button>
          </Col>
          <Col md="3">
            <h2>Java Training</h2>
            <p style={{ textAlign: "justify" }}>Dstarena provide JAVA courses Training to students, a path to a java certification. This training includes both core and advance java..</p>
            <Button variant="dark">Read More</Button>{'  '}
            
          </Col>
        </Row>
      </Container>
    </div >
  )
}

export default Cards
