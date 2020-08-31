import React from 'react';
import { MDBFooter, MDBBtn, MDBIcon } from 'mdbreact';

const Footer = () => {
    return (
        <MDBFooter style={{ background: '#EDEDEE'}}>
            <p className='mb-0 py-3 text-center text-muted'>
                &copy; {new Date().getFullYear()} Copyright:
          <a href="https://www.segursat.com" className="text-primary"> Segursat </a>
            </p>
        </MDBFooter>
    );
}

export default Footer;