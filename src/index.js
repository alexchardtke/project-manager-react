import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxPromise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';

// const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
	applyMiddleware(ReduxPromise)
));

// createStoreWithMiddleware(reducers)
ReactDOM.render(
	<Provider store={ store }>
		<App />
	</Provider>
, document.querySelector('.container-fluid'));
