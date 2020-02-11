import React from 'react';
//import ReactDOM from 'react-dom';

import {createStore,applyMiddleware} from 'redux';
import reducers from './reducers';
//import logger from 'redux-logger';
import {Provider} from 'react-redux';

import './index.css';
import App from './components/App';
import {render} from 'react-dom';
import * as serviceWorker from './serviceWorker';

//const middleware=applyMiddleware(logger);
const middleware=applyMiddleware();
const store=createStore(reducers,middleware);

render(
    <Provider store={store}>
    <App />
    </Provider>,
     document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
