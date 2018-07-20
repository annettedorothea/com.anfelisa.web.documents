import React from 'react';

export default class Statistics extends React.Component {

    render() {
        const all =
            this.props.quality0Count +
            this.props.quality1Count +
            this.props.quality2Count +
            this.props.quality3Count +
            this.props.quality4Count +
            this.props.quality5Count;
        if (all > 0) {
            const width0 = this.props.quality0Count / all * 100;
            const width1 = this.props.quality1Count / all * 100;
            const width2 = this.props.quality2Count / all * 100;
            const width3 = this.props.quality3Count / all * 100;
            const width4 = this.props.quality4Count / all * 100;
            const width5 = this.props.quality5Count / all * 100;
            return (
                <div className="statistics">
                    <div className="quality5" style={{width: `${width5}%`}}/>
                    <div className="quality4" style={{width: `${width4}%`}}/>
                    <div className="quality3" style={{width: `${width3}%`}}/>
                    <div className="quality2" style={{width: `${width2}%`}}/>
                    <div className="quality1" style={{width: `${width1}%`}}/>
                    <div className="quality0" style={{width: `${width0}%`}}/>
                </div>
            );
        } else {
            return "";
        }
    }
}

