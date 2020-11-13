import React from 'react';
import { Navbar } from '../components/ui/Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';

import { HomeScreen } from '../components/home/HomeScreen';
import { StreamingScreen } from '../components/streaming/StreamingScreen';
import { GamesScreen } from '../components/games/GamesScreen';

export const MainRoutes = () => {


    return (
        <>
            <Navbar />

            
                <Switch>
                    <Route exact path="/home" component={ HomeScreen } />
                    <Route exact path="/streaming" component={ StreamingScreen } />
                    <Route exact path="/juegos" component={ GamesScreen } />

                    <Redirect to="/home" />
                </Switch>            


        </>
    )
}
