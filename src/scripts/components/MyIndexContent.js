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
    },
    valueDisplay: {
        // fontSize: '1.3rem',
        margin: '1.0rem 0 1.0rem 0',
        lineHeight: '110%',
        fontWeight: 500,
    },

    icon: {
        width: 16,
        height: 16,
        marginRight: 10,
    }
};

let lineChartData = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    datasets: [
        {
            label: "dataset4",
            backgroundColor: "rgba(228,228,228,0.6)",
            data: [2, 5, 9, 12, 11, 8, 6, 4, 2, 1]
        },

        {
            label: "dataset2",
            backgroundColor: "rgba(255,69,105,0.9)",
            data: [6, 2, 3, 6, 7, 5, 11, 12, 13, 16]
        },

        {
            label: "dataset3",
            backgroundColor: "rgba(255,197,179,0.9)",
            data: [9, 8, 6, 10, 16, 15, 10, 6, 4, 2]
        },

    ]
};

let config = {
    radar: {
        count: 60,
        fillColor: 'rgba(244,67,54,' + 0.017 + ')',//历史填充
        lineColor: "rgba(244,67,54,0.1)",//历史线色
        newFillColor: transparent,//当前填充
        newLineColor: 'rgba(255,69,105,0.8)',//当前线色
    }
}

let radarChartData = {
    labels: ["No1", "No2", "No3", "No4"],
    datasets: [
    ]
};


class MyIndexContent extends React.Component {

    constructor(props) {
        super(props);
        this.refreshData = this.refreshData.bind(this);
        this.radarChart = undefined;
    }

    componentDidMount() {
        let lineOptions = {
            elements: {
                point: { radius: 0, borderWidth: 0 },
                line: { borderColor: transparent }
            }
        };

        new Chart(this.chartDom, {
            type: 'line',
            data: lineChartData,
            options: lineOptions,
        });

        let radarDatasets = radarChartData.datasets;
        DataRandom.randomInitRadarDatasets(radarDatasets, config.radar.count, config.radar.lineColor, config.radar.fillColor);

        let radarOptions = {
            scale: {
                ticks: {
                    min: 1100,
                    max: 1500,
                    stepSize: 50,
                }
            },
            animation: {
                duration: 800,//200ms
            },
            legend: {
                display: false,
            }
        };

        this.radarChart = new Chart(this.radarChartDom, {
            type: 'radar',
            data: radarChartData,
            options: radarOptions,
        });

        setInterval(this.refreshData, 1000);
    }

    refreshData() {

        let radarDatasets = radarChartData.datasets;
        if (radarDatasets.length > 0) {
            let dataItem = radarDatasets[0];
            DataRandom.updateHistoryRadarData(dataItem, config.radar.lineColor, config.radar.fillColor);

        }

        //最前的最后画  
        if (radarDatasets.length >= config.radar.count) {
            radarDatasets.pop();
            DataRandom.randomAppendNewRadarData(radarDatasets, config.radar.newLineColor, config.radar.newFillColor);
        } else {
            DataRandom.randomAppendNewRadarData(radarDatasets, config.radar.newLineColor, config.radar.newFillColor);
        }

        this.radarChart.update();
    }

    render() {
        return (
            <div>
                <Paper zDepth={2} style={styles.paper}>
                    <canvas ref={(ref) => this.chartDom = ref} ></canvas>
                </Paper >

                <Paper zDepth={2} style={styles.paper}>
                    <canvas ref={(ref) => this.radarChartDom = ref} ></canvas>
                </Paper >

                <Paper zDepth={2} style={styles.paper}>
                    <div>
                        <IconJZFH style={styles.icon} color={black} />机组负荷
                    </div>
                    <h2 style={styles.valueDisplay}>MW 990.630</h2>
                    <IconArrowUpward style={styles.icon} color={black} />15.121%
               </Paper >

                <Paper zDepth={2} style={styles.paper}>
                    <div>
                        <IconJZFH style={styles.icon} color={black} />锅炉负荷
                    </div>
                    <h2 style={styles.valueDisplay}>T/H 4.563</h2>
                    <IconArrowUpward style={styles.icon} color={black} />3.321%
                </Paper >

                <Paper zDepth={2} style={styles.paper}>
                    <div>
                        <IconJZFH style={styles.icon} color={black} />主汽压力
                      </div>
                    <h2 style={styles.valueDisplay}>MPa 1.051</h2>
                    <IconArrowUpward style={styles.icon} color={black} />1.764%
                 </Paper >
            </div>

        );
    }
}

export default MyIndexContent;