import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';

import Root from './screens/Root';


const app = document.getElementById('root');

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        app
    )
};

render(Root);

if(module.hot) module.hot.accept('./screens/Root', () => render(Root));
