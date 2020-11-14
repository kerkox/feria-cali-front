import React from 'react';
import { Navbar } from '../components/ui/Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';

import { StreamingScreen } from '../components/streaming/StreamingScreen';
import { GamesScreen } from '../components/games/GamesScreen';

export const DashboardRoutes = () => {


    return (
        <>
            <Navbar />
                <Switch>
                    <Route path="/premium/streaming" component={ StreamingScreen } />
                    <Route path="/premium/juegos" component={ GamesScreen } />

                    <Redirect to="/premium/streaming" />
                </Switch>

        </>
    )
}
