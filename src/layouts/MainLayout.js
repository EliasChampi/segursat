import React, { Component, useState } from 'react';

import { Footer, Sidebar, Navbar, Breadcrumb } from '../components'

import PropTypes from 'prop-types';
import "../index.css"
import { MDBBox } from 'mdbreact';

const MainLayout = ({ children, title }) => {

    const [isOpen, setIsOpen]  = useState(true);

    const handleToggleSidebar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="flexible-content">
            <Navbar onToggleSidebar={handleToggleSidebar} />
            {isOpen && <Sidebar handleToggleSidebar={handleToggleSidebar} />}
            <main id="content" >
                <MDBBox tag='p' className="h3 mb-5">{title}</MDBBox>
                {children}
            </main>
            <Footer />
        </div>
    )
}
MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default MainLayout;