import React from 'react';
import { Paper, Avatar } from 'material-ui';

import ChartJs from "chart.js";

import IconJZFH from 'material-ui/svg-icons/action/trending-up';
import IconArrowUpward from 'material-ui/svg-icons/navigation/arrow-upward';


import { transparent, black } from 'material-ui/styles/colors';

import Utils from './Utils';
import DataRandom from './DataRandom';
import MyAnalyze from './MyAnalyze';
import MyOverview from './MyOverview';

//主页面
class MyIndexContent extends React.Component {

    state = {
        page: 'Overview',
    };

    constructor(props) {
        super(props);

    }

    componentDidMount() {

    }

    render() {
        if (this.state.page == 'Overview') {
            return (
                <MyOverview handleChangeDrawerItem={this.props.handleChangeDrawerItem} />
            );
        } else if (this.state.page == 'Analyze') {
            return (
                <MyAnalyze />
            );
        }

    }
}

export default MyIndexContent;