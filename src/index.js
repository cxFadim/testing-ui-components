import '@babel/polyfill';
import React from 'react';
// import routes from './routes/routes';
// import {HashRouter as Router, hashHistory } from 'react-router-dom';
// import App from '../src/components/App';
// import { Provider } from 'mobx-react';
// import getStores from './stores/combinedStores';
import Main from './components/main';
import {render} from 'react-dom';

require('./styles/index.scss');

render(
    <Main/>
    ,document.getElementById('app')
);