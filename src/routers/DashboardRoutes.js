import React from 'react';
import { NavbarPremium } from '../components/ui/NavbarPremium';
import { Switch, Route, Redirect } from 'react-router-dom';

import { HeroScreen } from '../components/heroes/HeroScreen';
import { StreamingScreen } from '../components/streaming/StreamingScreen';
import { GamesScreen } from '../components/games/GamesScreen';

export const DashboardRoutes = () => {


    return (
        <>
            <NavbarPremium />

            <div className="container mt-2">
                <Switch>
                    <Route path="/premium/hero/:heroeId" component={ HeroScreen } />
                    <Route path="/premium/streaming" component={ StreamingScreen } />
                    <Route path="/premium/search" component={ GamesScreen } />

                    <Redirect to="/premium/marvel" />
                </Switch>
            </div>


        </>
    )
}
