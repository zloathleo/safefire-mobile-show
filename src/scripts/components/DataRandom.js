import { transparent, white } from 'material-ui/styles/colors';

import Utils from './Utils';

class DataRandom {

    static randomInitRadarDatasets(radarDatasets, count, newLineColor, fillColor) {
        for (let i = 0; i < count; i++) {
            radarDatasets.unshift({
                borderWidth: 0.3,
                pointRadius: 0,
                backgroundColor: fillColor,//无填充
                borderColor: newLineColor,//线
                pointBackgroundColor: transparent,
                pointBorderColor: transparent,

                data: [
                    Utils.randomFloatRange(1200, 1400),
                    Utils.randomFloatRange(1300, 1400),
                    Utils.randomFloatRange(1300, 1400),
                    Utils.randomFloatRange(1200, 1400)
                ]
            });
        }
    }

    static updateHistoryRadarData(dataItem, lineColor, fillColor) {
        dataItem.borderWidth = 0.3;
        dataItem.pointRadius = 0;

        dataItem.backgroundColor = fillColor;//填充
        dataItem.borderColor = lineColor;//线
        dataItem.pointBackgroundColor = transparent;
        dataItem.pointBorderColor = transparent;
    }


    static randomAppendNewRadarData(radarDatasets, newLineColor, fillColor) {
        radarDatasets.unshift({
            borderWidth: 1.2,
            pointRadius: 2,
            backgroundColor: transparent,//无填充
            borderColor: newLineColor,//线
            pointBackgroundColor: newLineColor,
            pointBorderColor: white,
            data: [
                Utils.randomFloatRange(1200, 1400),
                Utils.randomFloatRange(1300, 1400),
                Utils.randomFloatRange(1300, 1400),
                Utils.randomFloatRange(1200, 1400)
            ]
        });
    }



}

module.exports = DataRandom;