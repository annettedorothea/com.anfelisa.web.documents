import React from 'react';
import {route} from "../../../gen/common/ActionFunctions";
import {
    dictionaryLookupChanged,
    givenLanguageChanged,
    maxCardsPerDayChanged,
    maxIntervalChanged,
    rootCategoryNameChanged,
    wantedLanguageChanged,
    createRootCategory,
    saveBoxSettings
} from "../../../gen/box/ActionFunctions"

export default class BoxSettings extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.categoryName === undefined) {
            return <div/>;
        }
        return (
            <div className="center-wide">
                <div className="form">
                    <h1>{this.props.texts.boxSettings.title[this.props.language]}</h1>
                    {this.props.allActiveCards && this.props.allCards && <div
                        className="line">{this.props.texts.boxSettings.cardInfo[this.props.language].replace("{0}", this.props.allActiveCards).replace("{1}", this.props.allCards)}</div>}
                    <div className="line">
                        <label>{this.props.texts.boxSettings.categoryName[this.props.language]}</label>
                        <div className="inputContainer">
                            <input
                                onChange={(e) => rootCategoryNameChanged(e.target.value)}
                                type={"text"}
                                value={this.props.categoryName}
                            />
                            {!this.props.categoryName &&
                            <i className="fas fa-times outside error"/>}
                        </div>
                    </div>
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
                            {this.props.maxIntervalInvalid === true &&
                            <i className="fas fa-times outside error"/>}
                        </div>
                    </div>
                    <div className="noBreak line">
                        <input
                            type={"checkbox"}
                            onChange={() => dictionaryLookupChanged()}
                            checked={this.props.dictionaryLookup}
                            value={this.props.dictionaryLookup}
                            id="dictionaryLookupEditCheckbox"
                        />
                        <select value={this.props.givenLanguage} onChange={(e) => givenLanguageChanged(e.target.value)}
                                disabled={!this.props.dictionaryLookup}>
                            <option
                                value="">{this.props.texts.boxSettings.languages.emtpyFrom[this.props.language]}</option>
                            <option
                                value="de">{this.props.texts.boxSettings.languages.de[this.props.language]}</option>
                            <option
                                value="en">{this.props.texts.boxSettings.languages.en[this.props.language]}</option>
                            <option
                                value="fr">{this.props.texts.boxSettings.languages.fr[this.props.language]}</option>
                        </select>
                        <select value={this.props.wantedLanguage}
                                onChange={(e) => wantedLanguageChanged(e.target.value)}
                                disabled={!this.props.dictionaryLookup}>
                            <option
                                value="">{this.props.texts.boxSettings.languages.emtpyTo[this.props.language]}</option>
                            <option
                                value="de">{this.props.texts.boxSettings.languages.de[this.props.language]}</option>
                            <option
                                value="en">{this.props.texts.boxSettings.languages.en[this.props.language]}</option>
                            <option
                                value="fr">{this.props.texts.boxSettings.languages.fr[this.props.language]}</option>
                        </select>
                        {this.props.dictionaryLookupInvalid === true &&
                        <i className="fas fa-times outside error"/>}
                    </div>
                    <div className="moreMarginLine hCenter">
                        <button
                            disabled={
                                this.props.maxCardsPerDayInvalid ||
                                this.props.maxIntervalInvalid ||
                                this.props.dictionaryLookupInvalid ||
                                !this.props.categoryName.trim()
                            }
                            onClick={this.props.boxId ? () => saveBoxSettings() : () => createRootCategory()}>
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

