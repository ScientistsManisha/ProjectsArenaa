import React from 'react';
import { CDBCarousel, CDBCarouselItem, CDBCarouselInner, CDBView, CDBContainer } from 'cdbreact';
import IMAGE1 from "../Img/slider1.jpg"
import IMAGE2 from "../Img/slider2.jpg"
import IMAGE3 from "../Img/slider3.jpg"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import IMAGE4 from "../Img/slider4.jpg";
import IMAGE5 from "../Img/slider5.jpg";
import Marquee from "react-fast-marquee";

export const Slider = () => {
  return (
   
    <div>
      <Container>
        <Row className="justify-content-md-center" >
          <Col md="8" >
          <CDBContainer>
      <CDBContainer>
        <CDBCarousel
          activeItem={0}
          length={5}
          showControls={true}
          showIndicators={true}
          className="z-depth-1"
          slide
        >
          <CDBCarouselInner>
            <CDBCarouselItem itemId="1">
              <CDBView>
                <img className="d-block w-100" src={IMAGE1} alt="First slide" />
              </CDBView>
            </CDBCarouselItem>

            <CDBCarouselItem itemId="2">
              <CDBView>
                <img className="d-block w-100"  src={IMAGE2} alt="Second slide" />
              </CDBView>
            </CDBCarouselItem>

            <CDBCarouselItem itemId="3">
              <CDBView>
                <img className="d-block w-100"  src={IMAGE3} alt="Third slide" />
              </CDBView>
            </CDBCarouselItem>

            <CDBCarouselItem itemId="4">
              <CDBView>
                <img className="d-block w-100"  src={IMAGE4} alt="Fourth slide" />
              </CDBView>
            </CDBCarouselItem>
            <CDBCarouselItem itemId="5">
              <CDBView>
                <img className="d-block w-100"  src={IMAGE5} alt="Fifth slide" />
              </CDBView>
            </CDBCarouselItem>
          </CDBCarouselInner>
        </CDBCarousel>
      </CDBContainer>
    </CDBContainer>
          </Col>
          <Col  md="4">
          <Marquee direction="up" width="60%"  height="100px" speed={40} pauseOnHover="false" >
          <ul>
           <h1>Latest</h1>
            <h3>Thesis Topic</h3>
            <h3>Traning</h3>
            <h3>Research</h3>
            <h3>Services</h3>
            <h3>Web Hosting</h3>
            <h3>Web-design</h3>
        </ul>
     </Marquee>
          </Col>
      </Row>
    </Container>
    </div >
   
    
  );
};

export default Slider