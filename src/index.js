import 'react-app-polyfill/ie9';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import Admin from './Admin/Admin'
import { BrowserRouter,Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter
        /* basename={optionalString}
        forceRefresh={optionalBool}
        getUserConfirmation={optionalFunc}
        keyLength={optionalNumber} */>
        <Route exact path="/" component={App}/>
        <Route path="/app" component={App}/>
        <Route path="/admin" component={Admin}/>
    </BrowserRouter>,
 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();