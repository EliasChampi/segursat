import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { MainLayout } from "../../layouts";
import PropTypes from 'prop-types';

const WsbRoute = (props) => {

    const { isAuthenticated, component: Component, title, ...rest } = props;
    return (
        <Route {...rest} render={(matchProps) => {
            if (isAuthenticated) {
                return <MainLayout title={title}>
                    <Component {...matchProps} />
                </MainLayout>
            }
            return <Redirect to="/login" />;
        }} />
    )
}

WsbRoute.defaultProps = {
    isAuthenticated: true
}

WsbRoute.propTypes = {
    isAuthenticated: PropTypes.bool,
    component: PropTypes.any.isRequired,
    title: PropTypes.string
}

export default WsbRoute;
