import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route } from 'react-router-dom';


//custom
import Login from "./Login";
import Main from "./Main";

import Overview from "./Overview";
import Analyze from "./Analyze";


const RouteConfig = () => (
    <Router>
        <div style={{ height: '100%' }}>
            <Route exact path='/' component={Login} />
            <Route path='/main' component={Main} /> 
        </div>
    </Router >
)

export default RouteConfig;