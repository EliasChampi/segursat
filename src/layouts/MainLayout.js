import React, { Component } from 'react';

import { Footer, Sidebar, Navbar } from '../components'

import PropTypes from 'prop-types';
import "../index.css"


const MainLayout = ({ children }) => (
    <div className="flexible-content">
        <Navbar />
        <Sidebar />
        <main id="content" >
            {children}
        </main>
        <Footer />
    </div>
)
MainLayout.propTypes = {
    children: PropTypes.node,
};
export default MainLayout;