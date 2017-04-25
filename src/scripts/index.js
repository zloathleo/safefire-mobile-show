import React from 'react';
import ReactDOM from 'react-dom';
import Perf from 'react-addons-perf'

import MyRoutes from './components/MyRoutes';

window.Perf = Perf; // 挂载到全局变量方便使用

ReactDOM.render(
    <MyRoutes />,
    document.getElementById('root')
);