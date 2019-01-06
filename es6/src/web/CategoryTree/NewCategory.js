import React from 'react';
import CategoryNameChangedAction from "../../category/actions/CategoryNameChangedAction";
import DictionaryLookupChangedAction from "../../category/actions/DictionaryLookupChangedAction";
import GivenLanguageChangedAction from "../../category/actions/GivenLanguageChangedAction";
import WantedLanguageChangedAction from "../../category/actions/WantedLanguageChangedAction";
import CreateCategoryAction from "../../category/actions/CreateCategoryAction";
import CancelNewCategoryAction from "../../category/actions/CancelNewCategoryAction";

export default class NewCategory extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const disabled =
            !this.props.categoryName ||
            this.props.categoryName.length === 0 ||
            this.props.dictionaryLookup && (this.props.givenLanguage.length === 0 || this.props.wantedLanguage.length === 0);
        return (
            <div className="modal">
                <div className="modalContent form">
                    <h2>{this.props.texts.categoryTree.newCategory.title[this.props.language]}</h2>
                    <div className="line">
                        <input
                            type={"text"}
                            onChange={(event) => {
                                new CategoryNameChangedAction(event.target.value).apply()
                            }}
                            autoComplete="off"
                            value={this.props.categoryName}
                            placeholder={this.props.selectedCategory === undefined ? this.props.texts.categoryTree.newCategory.newRootCategory[this.props.language] : this.props.texts.categoryTree.newCategory.newChildCategory[this.props.language]}
                        />
                    </div>
                    <div className="noBreak line">
                        <input
                            type={"checkbox"}
                            onChange={() => {new DictionaryLookupChangedAction().apply()}}
                            checked={this.props.dictionaryLookup}
                            value={this.props.dictionaryLookup}
                            id="dictionaryLookupEditCheckbox"
                        />
                        <select value={this.props.givenLanguage} onChange={(e) => {new GivenLanguageChangedAction(e.target.value).apply()}}
                                disabled={!this.props.dictionaryLookup}>
                            <option
                                value="">{this.props.texts.categoryTree.languages.emtpyFrom[this.props.language]}</option>
                            <option
                                value="de">{this.props.texts.categoryTree.languages.de[this.props.language]}</option>
                            <option
                                value="en">{this.props.texts.categoryTree.languages.en[this.props.language]}</option>
                            <option
                                value="fr">{this.props.texts.categoryTree.languages.fr[this.props.language]}</option>
                        </select>
                        <select value={this.props.wantedLanguage} onChange={(e) => {new WantedLanguageChangedAction(e.target.value).apply()}}
                                disabled={!this.props.dictionaryLookup}>
                            <option
                                value="">{this.props.texts.categoryTree.languages.emtpyTo[this.props.language]}</option>
                            <option
                                value="de">{this.props.texts.categoryTree.languages.de[this.props.language]}</option>
                            <option
                                value="en">{this.props.texts.categoryTree.languages.en[this.props.language]}</option>
                            <option
                                value="fr">{this.props.texts.categoryTree.languages.fr[this.props.language]}</option>
                        </select>
                    </div>
                    <button
                        disabled={disabled}
                        onClick={() => {new CreateCategoryAction().apply()}}
                    >{this.props.texts.categoryTree.newCategory.ok[this.props.language]}</button>
                    <button
                        onClick={() => {new CancelNewCategoryAction().apply()}}
                    >{this.props.texts.categoryTree.newCategory.cancel[this.props.language]}</button>
                </div>
            </div>
        );
    }
}

