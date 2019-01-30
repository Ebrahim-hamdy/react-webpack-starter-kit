import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import importedComponent from 'react-imported-component';

import Loading from './components/Loading/Main';
import Home from './components/Home/Main';
import NoMatch from './NoMatch';

const AsyncHome = importedComponent(
    () => import('./components/Home/Main')
    , { LoadingComponent: Loading }
);

const AsyncNoMatch = importedComponent(
    () => import('./NoMatch')
    , { LoadingComponent: Loading }
);

export const Root = () => {
    return(
        <Router>
            <div>
                <Switch>
                    <Route exact path='/' component={AsyncHome} />
                    <Route component={AsyncNoMatch} />
                </Switch>
            </div>
        </Router>
    );
};
