import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter bgColor='black' className='text-center text-lg-start text-white' style={{ margin:"-15px"}}>

      <section className='d-flex justify-content-center '>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Company name
              </h6>
              <p style={{ textAlign: "justify" }}>
                DstArena Private Limited ,  Premium Center, 146/7/2,
                Bhopal,
                M.P – 462011
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>TRAINING</h6>
              <p style={{ textAlign: "justify" }}>
                {/* <a href='#!' className='text-reset'>
                  Angular
                </a> */}
                Career Training
                Real Time Program Training
                Corporate Training
                Internship Training
                In-Plant Training
                College Work Shops
                Placements
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>PROJECTS</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Embedded
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Java Projects
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Dot net Projects
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Android Projects
                </a>
              </p>
              {/* <p>
                <a href='#!' className='text-reset'>
              NS2 Projects
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                VLSI Projects
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
              Matlab (Simulink)
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Matlab (DSP,DIP)
                </a>
              </p> */}
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                premium center, 146/7/2, 
                Bhopal,
                M.P - 462011,
                India
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                dstarenainfo@gmail.com
              </p>

              <p>
                <MDBIcon icon="envelope" className="me-3" />
                onpriceinfo@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> 9993897203
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" />  0755-4222290
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='link' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='link' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='link' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='link' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='link' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='link' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2012-18 Copyright:{' '}
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
        Design and Study of Technology Arena
DESIGN AND MAINTAIN BY DSTARENA
        </a>
      </div>
    </MDBFooter>
  );
}