import React from 'react';
import { MDBFooter, MDBBtn, MDBIcon } from 'mdbreact';

const Footer = () => {
    return (
        <MDBFooter color="stylish-color" className="text-center font-small darken-2" style={{position : "absolute",bottom : "0", width : "1650px"}}>
            <p className="footer-copyright mb-0 py-3 text-center">
                &copy; {new Date().getFullYear()} Copyright: <a href="https://www.segursat.com"> Segursat </a>
            </p>
        </MDBFooter>
    );
}

export default Footer;