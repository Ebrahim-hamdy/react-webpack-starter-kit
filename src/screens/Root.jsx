import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import importedComponent from 'react-imported-component';

import LoadingMain from './Loading/Main';

const AsyncHome = importedComponent(() => import('./Home/Main'), { LoadingComponent: LoadingMain });

const AsyncNoMatch = importedComponent(() => import('./NoMatch/Main'), {
  LoadingComponent: LoadingMain,
});

const Root = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={AsyncHome} />
          <Route component={AsyncNoMatch} />
        </Switch>
      </div>
    </Router>
  );
};

export default Root;
