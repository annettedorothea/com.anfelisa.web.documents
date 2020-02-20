import React from 'react';
import {route} from "../../../gen/common/ActionFunctions";
import {maxCardsPerDayChanged, maxIntervalChanged, saveBoxSettings} from "../../../gen/box/ActionFunctions"

export default class BoxSettings extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="center-wide">
                <div className="form">
                    <h1>{this.props.texts.boxSettings.title[this.props.language]}</h1>
                    <div className="line">
                        <label>{this.props.texts.boxSettings.maxCardsPerDay[this.props.language]}</label>
                        <div className="inputContainer">
                            <input
                                onChange={(e) => maxCardsPerDayChanged(e.target.value)}
                                type={"text"}
                                value={this.props.maxCardsPerDay}
                            />
                            {this.props.maxCardsPerDayInvalid === true &&
                            <i className="fas fa-times outside error"/>}
                        </div>
                    </div>
                    <div className="line">
                        <label>{this.props.texts.boxSettings.maxInterval[this.props.language]}</label>
                        <div className="inputContainer">
                            <input
                                onChange={(e) => maxIntervalChanged(e.target.value)}
                                type={"text"}
                                value={this.props.maxInterval}
                            />
                        </div>
                    </div>
                    <div className="moreMarginLine hCenter">
                        <button
                            disabled={this.props.maxCardsPerDayInvalid}
                            onClick={() => saveBoxSettings()}>
                            {this.props.texts.boxSettings.save[this.props.language]}
                        </button>
                        <button
                            onClick={() => route("#dashboard")}>{this.props.texts.boxSettings.cancel[this.props.language]}</button>
                    </div>
                </div>
            </div>
        );
    }
}

