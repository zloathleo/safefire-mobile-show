import React from 'react';
import { Paper, Avatar } from 'material-ui';

import ChartJs from "chart.js";

import IconJZFH from 'material-ui/svg-icons/action/trending-up';
import IconArrowUpward from 'material-ui/svg-icons/navigation/arrow-upward';


import { transparent, black } from 'material-ui/styles/colors';

import Utils from './Utils';
import DataRandom from './DataRandom';

const styles = {
    paper: {
        flex: 1,
        height: '100%',
        margin: 15,
        color: '#000000',
        fontSize: '0.80rem',
        padding: 20
    }
};

const config = {
    tempChart: {
        count: 60,
        fillColor: 'rgba(244,67,54,' + 0.017 + ')',//历史填充
        lineColor: "rgba(244,67,54,0.1)",//历史线色
        newFillColor: transparent,//当前填充
        newLineColor: 'rgba(255,69,105,0.8)',//当前线色
    },
    tempHisChartOptions: {
        title: {
            display: true,
            text: 'temperature history in corners',
            fontFamily: 'sans-serif',
            fontStyle: 'normal',
            fontSize: 16,
        },
        elements: {
            point: { radius: 2 },
            line: { borderWidth: 1 }
        },
    },
}

class MyAnalyze extends React.Component {

    constructor(props) {
        super(props);
        this.refreshData = this.refreshData.bind(this);
        this.tempRadarChartDom = undefined;
        this.tempRadarChart = undefined;

        this.tempLineChartDom = undefined;
        this.tempLineChart = undefined;

        this.tempHisAreaLineChartDom = undefined;
        this.tempHisAreaLineChart = undefined;
    }

    componentDidMount() {
        let lineChartData = DataRandom.requestTempHistoryDatasets();

        //历史linearea chart
        this.tempHisAreaLineChart = new Chart(this.tempHisAreaLineChartDom, {
            type: 'line',
            data: lineChartData,
            options: config.tempHisChartOptions,
        });

        ///////////////////////////
        //////四角
        /////////////////////////// 
        let _options = {
            title: {
                display: true,
                text: 'temperature in corners',
                fontFamily: 'sans-serif',
                fontStyle: 'normal',
                fontSize: 16,
            },
            scale: {
                ticks: {
                    beginAtZero: false,
                    min: 1100,
                    max: 1500,
                    maxTicksLimit: 1500,
                    stepSize: 50,
                    suggestedMax: 1500,
                    suggestedMin: 1100,
                    fixedStepSize: 50,
                }
            },
            animation: {
                duration: 800,//200ms
            },
            legend: {
                display: false,
            },
            elements: {

                point: { radius: 0, borderWidth: 0 },
                line: {
                    tension: 0.2,
                    borderColor: transparent
                }
            }
        };
        let initTempDataSets = DataRandom.randomInitRadarDatasets(config.tempChart.count, config.tempChart.lineColor, config.tempChart.fillColor);
        //  temp LineChart 
        this.tempLineChart = new Chart(this.tempLineChartDom, {
            type: 'line',
            data: {
                labels: ["No1", "No2", "No3", "No4"],
                datasets: initTempDataSets,
            },
            options: _options,
        });

        //radar
        let initTempRadarDataSets = initTempDataSets.slice(0);
        this.tempRadarChart = new Chart(this.tempRadarChartDom, {
            type: 'radar',
            data: {
                labels: ["No1", "No2", "No3", "No4"],
                datasets: initTempRadarDataSets,
            },
            options: _options,
        });

        setInterval(this.refreshData, 1000);
    }

    refreshData() {
        //temp line  
        let newData = DataRandom.randomNewRadarData(config.tempChart.newLineColor);

        let tempLineDatasets = this.tempLineChart.data.datasets;
        this.refreshTempChart(tempLineDatasets, newData);
        this.tempLineChart.update();

        let radarDatasets = this.tempRadarChart.data.datasets;
        this.refreshTempChart(radarDatasets, newData);
        this.tempRadarChart.update();
    }

    refreshTempChart(datasets, newData) {
        if (datasets.length > 0) {
            let dataItem = datasets[0];
            DataRandom.updateHistoryRadarData(dataItem, config.tempChart.lineColor, config.tempChart.fillColor);
        }
        //最前的最后画  
        if (datasets.length >= config.tempChart.count) {
            datasets.pop();
            datasets.unshift(newData);
        } else {
            datasets.unshift(newData);
        }
    }

    render() {
        return (
            <div> 
                <Paper zDepth={2} style={styles.paper}>
                    <canvas ref={(ref) => this.tempRadarChartDom = ref} ></canvas>
                </Paper >
                <Paper zDepth={2} style={styles.paper}>
                    <canvas ref={(ref) => this.tempLineChartDom = ref} ></canvas>
                </Paper >
                <Paper zDepth={2} style={styles.paper}>
                    <canvas ref={(ref) => this.tempHisAreaLineChartDom = ref} height={240} ></canvas>
                </Paper > 
 
            </div>

        );
    }
}

export default MyAnalyze;