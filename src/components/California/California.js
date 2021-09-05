import React from 'react';
import { Route, Switch, Link, useRouteMatch } from 'react-router-dom';
import SanDiego from './SanDiego';
import SanFrancisco from './SanFrancisco';

function California() {
    const { path } = useRouteMatch();

    console.log(`This is the ${path} component`);

    return (
        <>
            <h2>California Cities</h2>

            <ul>
                <li><Link to={`${path}/sandiego`}>San Diego</Link></li>
                <li><Link to={`${path}/sanfranisco`}>San Francisco</Link></li>
            </ul>

            <Switch>
                <Route path={`${path}/sandiego`}>
                    <SanDiego />
                </Route>
                <Route path={`${path}/sanfranisco`}>
                    <SanFrancisco />
                </Route>
            </Switch>
        </>
    );
}

export default California;

