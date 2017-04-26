import React from 'react';
import ReactDOM from 'react-dom';
// import Perf from 'react-addons-perf'

import URL from 'url';

import MyRoutes from './components/MyRoutes';

// window.Perf = Perf; // 挂载到全局变量方便使用

global._currentPath = '/';
global._currentPath = URL.parse(document.URL).path; 
console.log('_currentPath:' + global._currentPath);

ReactDOM.render(
    <MyRoutes.IndexRouteConfig />,
    document.getElementById('root')
);