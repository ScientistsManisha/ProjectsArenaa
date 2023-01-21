import React from 'react'
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Banners = () => {
  return (
    <div className='banner'>
     <Container style={{padding:"100px"}}>
        <Row  className="justify-content-md-center">
            <Col md="2"></Col>{' '}
            <Col md="8" style={{backgroundColor:"black", color:"white"}}> <h2>We offer Following Product & Services</h2> </Col>
           <Col md="2"></Col>

           
        </Row>
     </Container>
    </div>
  )
}

export default Banners
