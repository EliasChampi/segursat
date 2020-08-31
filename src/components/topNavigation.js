import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon,MDBDropdown,MDBDropdownToggle,MDBDropdownMenu,MDBDropdownItem } from 'mdbreact';

class TopNavigation extends Component {
  state = {
    collapse: false
  }

  onClick = () => {
    this.setState({
      collapse: !this.state.collapse,
      });
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <MDBNavbar color="blue" className="flexible-navbar" light expand="md" scrolling>
        <MDBNavbarBrand href="/dashboard">
          <strong style={{color:"white"}}>Dashboard</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick = { this.onClick } />
        <MDBCollapse isOpen = { this.state.collapse } navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="#">Inicio</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" />
                </MDBDropdownToggle>
                <MDBDropdownMenu right basic>
                  <MDBDropdownItem href="#!">Mi perfil</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Cerrar Sesión</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
    }
}

export default TopNavigation;