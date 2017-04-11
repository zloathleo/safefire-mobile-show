import React from 'react';
import { Paper, Avatar } from 'material-ui';

import ChartJs from "chart.js";

import IconJZFH from 'material-ui/svg-icons/action/trending-up';
import IconArrowUpward from 'material-ui/svg-icons/navigation/arrow-upward';


import { black } from 'material-ui/styles/colors';

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



class MyIndexContent extends React.Component {

    componentDidMount() {
        console.log('this.chartDom:' + this.chartDom);

        let chartData = {
            labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            datasets: [



                {
                    label: "dataset4",
                    backgroundColor: "rgba(228,228,228,0.6)",
                    // pointDotRadius: 0,
                    // pointDot: false,
                    data: [2, 5, 9, 12, 11, 8, 6, 4, 2, 1]
                },

                {
                    label: "dataset2",
                    backgroundColor: "rgba(255,69,105,0.9)",
                    // pointDotRadius: 0,
                    // pointDot: false,
                    data: [6, 2, 3, 6, 7, 5, 11, 12, 13, 16]
                },

                {
                    label: "dataset3",
                    backgroundColor: "rgba(255,197,179,0.9)",
                    // pointDotRadius: 0,
                    // pointDot: false,
                    data: [9, 8, 6, 10, 16, 15, 10, 6, 4, 2]
                },

                // {
                //     label: "Prime1",
                //     backgroundColor: "rgba(255,57,90,1)",
                //     data: [12, 7, 5, 7, 11, 13, 10, 4, 12, 29]
                // },
            ]
        };
        let _options = {
            elements: {
                point: { radius: 0, borderWidth: 0 },
                line: { borderColor: 'rgba(255,255,255,0)' }
            }
        };

        new Chart(this.chartDom, {
            type: 'line',
            data: chartData,
            options: _options,
        });

        //
    }

    render() {
        return (
            <div>
                <Paper zDepth={2} style={styles.paper}>
                    <canvas ref={(ref) => this.chartDom = ref} ></canvas>
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