import React from 'react';
import { Navbar } from '../components/ui/Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';

import { StreamingScreen } from '../components/streaming/StreamingScreen';

export const DashboardRoutes = () => {


    return (
        <>
            <Navbar />
                <Switch>
                    <Route path="/premium/streaming" component={ StreamingScreen } />
                    <Redirect to="/premium/streaming" />
                </Switch>

        </>
    )
}
