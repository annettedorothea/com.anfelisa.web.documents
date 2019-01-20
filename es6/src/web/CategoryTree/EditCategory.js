import React from 'react';
import {
    cancelEditCategory,
    categoryNameChanged,
    dictionaryLookupChanged,
    givenLanguageChanged,
    updateCategory,
    wantedLanguageChanged
} from "../../../gen/category/ActionFunctions";

export default class EditCategory extends React.Component {

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
                    <h2>{this.props.texts.categoryTree.editCategory.title[this.props.language]}</h2>
                    <div className="line">
                        <input
                            type={"text"}
                            onChange={(event) => categoryNameChanged(event.target.value)}
                            autoComplete="off"
                            value={this.props.categoryName}
                            placeholder={this.props.selectedCategory.parentCategoryId === undefined ? this.props.texts.categoryTree.editCategory.rootCategory[this.props.language] : this.props.texts.categoryTree.editCategory.childCategory[this.props.language]}
                        />
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
                                value="">{this.props.texts.categoryTree.languages.emtpyFrom[this.props.language]}</option>
                            <option
                                value="de">{this.props.texts.categoryTree.languages.de[this.props.language]}</option>
                            <option
                                value="en">{this.props.texts.categoryTree.languages.en[this.props.language]}</option>
                            <option
                                value="fr">{this.props.texts.categoryTree.languages.fr[this.props.language]}</option>
                        </select>
                        <select value={this.props.wantedLanguage}
                                onChange={(e) => wantedLanguageChanged(e.target.value)}
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
                        onClick={() => updateCategory()}
                    >{this.props.texts.categoryTree.editCategory.ok[this.props.language]}</button>
                    <button
                        onClick={() => cancelEditCategory()}
                    >{this.props.texts.categoryTree.editCategory.cancel[this.props.language]}</button>
                </div>
            </div>
        )
            ;
    }
}

