import React from 'react';

export default class Statistics extends React.Component {

    rounded(width, elementWidthBefore, elementWidthAfter) {
        if (width === 100) {
            return "rounded"
        }
        if (elementWidthBefore === 0) {
            return "rounded-left"
        }
        if (elementWidthAfter === 0) {
            return "rounded-right"
        }
    }

    render() {
        const all =
            this.props.quality0Count +
            this.props.quality1Count +
            this.props.quality2Count +
            this.props.quality3Count +
            this.props.quality4Count +
            this.props.quality5Count;
        if (all > 0) {
            let qualityMap = [];
            qualityMap[0] = {
                key: 0,
                value: this.props.quality0Count
            };
            qualityMap[1] = {
                key: 1,
                value: this.props.quality1Count
            };
            qualityMap[2] = {
                key: 2,
                value: this.props.quality2Count
            };
            qualityMap[3] = {
                key: 3,
                value: this.props.quality3Count
            };
            qualityMap[4] = {
                key: 4,
                value: this.props.quality4Count
            };
            qualityMap[5] = {
                key: 5,
                value: this.props.quality5Count
            };
            qualityMap.sort((a, b) => {
                return a.value - b.value;
            });
            let sum = 0;
            let i = 0;
            qualityMap.forEach(e => {
                e.percentage = Math.round(e.value * 100 / all);
                if (sum + e.percentage > 100 || sum + e.percentage < 100 && i === 6) {
                    e.percentage = 100 - sum;
                }
                sum += e.percentage;
                i++;
            });
            const width0 = qualityMap.find(e => e.key === 0).percentage;
            const width1 = qualityMap.find(e => e.key === 1).percentage;
            const width2 = qualityMap.find(e => e.key === 2).percentage;
            const width3 = qualityMap.find(e => e.key === 3).percentage;
            const width4 = qualityMap.find(e => e.key === 4).percentage;
            const width5 = qualityMap.find(e => e.key === 5).percentage;
            return (
                <div className="statistics">
                    <div className={`${this.rounded(width5, 0, width4 + width3 + width2 + width1 + width0)} quality5`}
                         style={{width: `${width5}%`}}/>
                    <div className={`${this.rounded(width4, width5, width3 + width2 + width1 + width0)} quality4`}
                         style={{width: `${width4}%`}}/>
                    <div className={`${this.rounded(width3, width5 + width4, width2 + width1 + width0)} quality3`}
                         style={{width: `${width3}%`}}/>
                    <div className={`${this.rounded(width2, width5 + width4 + width3, width1 + width0)} quality2`}
                         style={{width: `${width2}%`}}/>
                    <div className={`${this.rounded(width1, width5 + width4 + width3 + width2, width0)} quality1`}
                         style={{width: `${width1}%`}}/>
                    <div className={`${this.rounded(width0, width5 + width4 + width3 + width2 + width1, 0)} quality0`}
                         style={{width: `${width0}%`}}/>
                </div>
            );
        } else {
            return "";
        }
    }
}

