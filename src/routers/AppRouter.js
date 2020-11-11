import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
  } from 'react-router-dom';


import { AuthContext } from '../auth/AuthContext';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

import { MainRoutes } from './MainRoutes';
import { DashboardRoutes } from './DashboardRoutes';
import { AuthRoutes } from './AuthRoutes';


export const AppRouter = () => {

    const { user } = useContext(AuthContext);

    return (
        <Router>
                <Switch> 
                    <PublicRoute 
                        path="/auth" 
                        component={ AuthRoutes } 
                        isAuthenticated={ user.logged }
                    />
                    
                    <PrivateRoute 
                        path="/premium" 
                        component={ DashboardRoutes } 
                        isAuthenticated={ user.logged }
                    />

                    <Route 
                        exact
                        path="" 
                        component={ MainRoutes } 
                    />

                </Switch>
        </Router>
    )
}
