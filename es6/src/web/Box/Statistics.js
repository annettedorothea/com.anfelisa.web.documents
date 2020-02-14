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
            const width0 = Math.round(this.props.quality0Count / all * 100);
            const width1 = Math.round(this.props.quality1Count / all * 100);
            const width2 = Math.round(this.props.quality2Count / all * 100);
            const width3 = Math.round(this.props.quality3Count / all * 100);
            const width4 = Math.round(this.props.quality4Count / all * 100);
            const width5 = 100 - width0 - width1 - width2 - width3 - width4;
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

