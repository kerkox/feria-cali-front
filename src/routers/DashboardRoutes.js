import React from 'react';
import { Navbar } from '../components/ui/Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';

import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { SearchScreen } from '../components/search/SearchScreen';

export const DashboardRoutes = () => {


    return (
        <>
            <Navbar />

            <div className="container mt-2">
                <Switch>
                    <Route path="/premium/marvel" component={ MarvelScreen } />
                    <Route path="/premium/hero/:heroeId" component={ HeroScreen } />
                    <Route path="/premium/dc" component={ DcScreen } />
                    <Route path="/premium/search" component={ SearchScreen } />

                    <Redirect to="/premium/marvel" />
                </Switch>
            </div>


        </>
    )
}
