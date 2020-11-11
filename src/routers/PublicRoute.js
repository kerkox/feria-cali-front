import React from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';


export const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    console.log("isAuthenticated en public Route: ", isAuthenticated)
    return (
        <Route { ...rest }
            component={ (props) => (
                ( !isAuthenticated )
                    ? ( <Component { ...props } /> )
                    : ( <Redirect to="/premium" /> )
            )}
        
        />
    )
}

PublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
