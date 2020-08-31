import React from 'react';
import logo_solgas from "../assets/logo-solgas.png";
import { MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar-fixed position-fixed">
            <a href="#!" className="waves-effect">
                <img alt="MDB React Logo" className="img-fluid" src={logo_solgas} />
            </a>
            <MDBListGroup className="list-group-flush">
                <NavLink exact={true} to="/" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="chart-pie" className="mr-3" />
                        Dashboard
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/events" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="bell" className="mr-3" />
                        Ultimos Eventos
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/history_events" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="bell" className="mr-3" />
                        Historial de Eventos
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/checkpoints" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="map" className="mr-3" />
                        Checkpoints
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/drivers" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="user-alt" className="mr-3" />
                        Conductores
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/units" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="car" className="mr-3" />
                        Unidades
                    </MDBListGroupItem>
                </NavLink>
            </MDBListGroup>
        </div>
    );
}

export default Sidebar;