import React from 'react';
import NameOfNewCategoryChangedAction from "../../category/actions/NameOfNewCategoryChangedAction";
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
            this.props.categoryNameAlreadyExists === true ||
            !this.props.newCategoryName ||
            this.props.newCategoryName.length === 0 ||
            this.props.dictionaryLookup && (this.props.givenLanguage.length === 0 || this.props.wantedLanguage.length === 0);
        return (
            <div className="modal">
                <div className="modalContent">
                    <h2>{this.props.texts.categoryTree.newCategory.title[this.props.language]}</h2>
                    <div>
                        <input
                            type={"text"}
                            onChange={(event) => {
                                new NameOfNewCategoryChangedAction(event.target.value).apply()
                            }}
                            autoComplete="off"
                            value={this.props.newCategoryName}
                            placeholder={this.props.selectedCategory === undefined ? this.props.texts.categoryTree.newCategory.newRootCategory[this.props.language] : this.props.texts.categoryTree.newCategory.newChildCategory[this.props.language]}
                        />
                        {this.props.categoryNameAlreadyExists === true && this.props.newCategoryName && this.props.newCategoryName.length > 0 &&
                        <i className="fas fa-times error"/>}
                    </div>
                    <div className="noBreak">
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
                                value="">{this.props.texts.categoryList.languages.emtpyFrom[this.props.language]}</option>
                            <option
                                value="de">{this.props.texts.categoryList.languages.de[this.props.language]}</option>
                            <option
                                value="en">{this.props.texts.categoryList.languages.en[this.props.language]}</option>
                            <option
                                value="fr">{this.props.texts.categoryList.languages.fr[this.props.language]}</option>
                        </select>
                        <select value={this.props.wantedLanguage} onChange={(e) => {new WantedLanguageChangedAction(e.target.value).apply()}}
                                disabled={!this.props.dictionaryLookup}>
                            <option
                                value="">{this.props.texts.categoryList.languages.emtpyTo[this.props.language]}</option>
                            <option
                                value="de">{this.props.texts.categoryList.languages.de[this.props.language]}</option>
                            <option
                                value="en">{this.props.texts.categoryList.languages.en[this.props.language]}</option>
                            <option
                                value="fr">{this.props.texts.categoryList.languages.fr[this.props.language]}</option>
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

