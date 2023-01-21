import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LOGO from '../Img/LOGO.png'


const Preheader = () => {
    return (
        <div className='preHeader'>
            <>

                <Navbar bg="dark text-light" variant="dark">
                    <Container>
                        <Row>
                            <Col>
                                <img
                                    alt=""
                                    src={LOGO}
                                    width="630"
                                    height="245"
                                    // marginLeft="100px"
                                    // padding="30px"
                                    className="d-inline-block align-top"
                                />{' '}

                            </Col>
                            <Col style={{ padding: "100px", variant : "textLight" }}>

                                Contact Us:- 09993897203,<br />
                                Email:- ramnath@dstarena.com,<br />
                                Add:- 146/7/2 Premium Center,<br />
                                Zone-1,MP Nagar<br />
                                Bhopal-462011
                            </Col>
                        </Row>
                    </Container>
                </Navbar>

            </>

        </div>
    )
}

export default Preheader



