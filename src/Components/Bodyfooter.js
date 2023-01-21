import React from 'react'
import { MDBFooter } from 'mdbreact/dist/mdbreact';

const Bodyfooter = () => {
  return (
    <div>
      <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        {/* &copy; {new Date().getFullYear()} Copyright:{' '} */}
        <a className='text-dark' href='https://mdbootstrap.com/'>
         HOME| Training |  Services |  Software | Project | Blog | Portfolio | Client |Event | Contact Us | Registraion       
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Bodyfooter
