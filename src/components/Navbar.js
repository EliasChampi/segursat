import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from 'mdbreact';
//import { Breadcrumb } from '.';
const Navbar = (props) => {

  const { onToggleSidebar } = props;

  return (
    <MDBNavbar color="blue" className="flexible-navbar" fixed="top" light expand="md" scrolling>
      <MDBNavbarToggler onClick={onToggleSidebar} />
      <MDBNavbarBrand href="/dashboard">
        <strong style={{ color: 'white' }}>Dashboard</strong>
      </MDBNavbarBrand>

      <MDBNavbarNav right>
        <MDBNavItem>
          <MDBDropdown>
            <MDBDropdownToggle nav caret style={{ color: 'white' }}>
              <MDBIcon icon="user" />
            </MDBDropdownToggle>
            <MDBDropdownMenu right basic>
              <MDBDropdownItem href="#!">Mi perfil</MDBDropdownItem>
              <MDBDropdownItem href="#!">Cerrar Sesión</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </MDBNavItem>
      </MDBNavbarNav>
    </MDBNavbar>
  )
}

export default Navbar;