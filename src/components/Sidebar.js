import React from 'react';
import logo_solgas from "../assets/logo-solgas.png";
import { MDBCloseIcon } from 'mdbreact';
import { NavLink } from 'react-router-dom';

import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

const Sidebar = ({ handleToggleSidebar }) => {
    return (
        <ProSidebar
            breakPoint="md"
            onToggle={handleToggleSidebar}>
            <Menu iconShape="square">
                <MenuItem icon={<MDBCloseIcon />}>Dashboard</MenuItem>
                <SubMenu title="Components" icon={<MDBCloseIcon />}>
                    <MenuItem>Component 1</MenuItem>
                    <MenuItem>Component 2</MenuItem>
                </SubMenu>
            </Menu>
        </ProSidebar>
    );
}

export default Sidebar;