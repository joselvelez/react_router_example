import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
    // BrowserRouter will be the base configuration
    // Switch will wrap the dynamic routes
    // Route will configure the specific routes and wrap the component
import California from './components/California/California';
import SanDiego from './components/California/SanDiego';
import Texas from './components/Texas/Texas';
import Florida from './components/Florida/Florida';
import Oklahoma from './components/Oklahoma/Oklahoma';

function App () {
    return (
        <>
            <div className="wrapper">
                <h1>List of Major Cities</h1>

                <BrowserRouter>

                    <nav>
                        <ul>
                            <li><Link to="/california">California</Link></li>
                                <li><Link to="/sandiego">San Diego</Link></li>
                            <li><Link to="/texas">Texas</Link></li>
                            <li><Link to="/oklahoma">Oklahoma</Link></li>
                            <li><Link to="/florida">Florida</Link></li>
                        </ul>
                    </nav>

                    <Switch>
                        <Route exact path="/california">
                            <California />
                        </Route>
                        <Route path="/california/:usState">
                            <SanDiego />
                        </Route>
                        <Route path="/texas">
                            <Texas />
                        </Route>
                        <Route path="/florida">
                            <Florida />
                        </Route>
                        <Route path="/oklahoma">
                            <Oklahoma />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        </>
    )
}

export default App;