import React from 'react';
import { Navbar2 } from '../components/ui/Navbar2';
import { Switch, Route, Redirect } from 'react-router-dom';

import { MarvelScreen2 } from '../components/marvel/MarvelScreen2';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { SearchScreen } from '../components/search/SearchScreen';

export const MainRoutes = () => {


    return (
        <>
            <Navbar2 />

            <div className="container mt-2">
                <Switch>
                    <Route exact path="/marvel2" component={ MarvelScreen2 } />
                    <Route exact path="/hero2/:heroeId" component={ HeroScreen } />
                    <Route exact path="/dc2" component={ DcScreen } />
                    <Route exact path="/search2" component={ SearchScreen } />

                    <Redirect to="/marvel2" />
                </Switch>
            </div>


        </>
    )
}
