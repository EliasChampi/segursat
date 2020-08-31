
import React, { Component } from "react";
import PropTypes from "prop-types";
import { MDBBreadcrumb, MDBBreadcrumbItem } from "mdbreact";
import { withRouter } from "react-router-dom";



const Breadcrumb = ({ title, history }) => (
    <MDBBreadcrumb>
        <MDBBreadcrumbItem bold  onClick={() => history.push("/dashboard")}>Inicio</MDBBreadcrumbItem>
        <MDBBreadcrumbItem active >{title}</MDBBreadcrumbItem>
    </MDBBreadcrumb>
)

Breadcrumb.propTypes = {
    title: PropTypes.string.isRequired
}

export default withRouter(Breadcrumb);