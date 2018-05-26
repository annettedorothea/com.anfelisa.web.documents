import WantedLanguageOfNewCategoryChangedAction from "../../author/actions/WantedLanguageOfNewCategoryChangedAction";
import NameOfNewCategoryChangedAction from "../../author/actions/NameOfNewCategoryChangedAction";
import CreateCategoryAction from "../../author/actions/CreateCategoryAction";
import CancelNewCategoryAction from "../../author/actions/CancelNewCategoryAction";
import React from "react";
import ToggleDictionaryLookupOfNewCategoryAction from "../../author/actions/ToggleDictionaryLookupOfNewCategoryAction";
import GivenLanguageOfNewCategoryChangedAction from "../../author/actions/GivenLanguageOfNewCategoryChangedAction";

export default class NewCategory extends React.Component {

    constructor(props) {
        super(props);
        this.onNameChange = this.onNameChange.bind(this);
        this.onNewCategory = this.onNewCategory.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
        this.onDictionayLookupChange = this.onDictionayLookupChange.bind(this);
        this.onGivenLanguageChange = this.onGivenLanguageChange.bind(this);
        this.onWantedLanguageChange = this.onWantedLanguageChange.bind(this);
    }

    onNameChange(event) {
        const name = event.target.value;
        new NameOfNewCategoryChangedAction({name, categoryList: this.props.categoryList}).apply();
    }

    onCancel() {
        new CancelNewCategoryAction().apply();
    }

    onNewCategory() {
        const data = {
            username: this.props.username,
            password: this.props.password,
            categoryName: this.props.name,
            parentCategoryId: this.props.parentCategoryId,
            dictionaryLookup: this.props.dictionaryLookup,
            givenLanguage: this.props.givenLanguage,
            wantedLanguage: this.props.wantedLanguage
        };
        new CreateCategoryAction(data).apply();
    }

    onKeyUp(e) {
        e.preventDefault();
        if (e.keyCode === 13 && this.props.nameAlreadyExists === false && this.props.name && this.props.name.length > 0) {
            this.onNewCategory();
        }
    }

    onDictionayLookupChange() {
        new ToggleDictionaryLookupOfNewCategoryAction().apply();
    }

    onGivenLanguageChange(e) {
        const data = {
            givenLanguage: e.target.value
        };
        new GivenLanguageOfNewCategoryChangedAction(data).apply();
    }

    onWantedLanguageChange(e) {
        const data = {
            wantedLanguage: e.target.value
        };
        new WantedLanguageOfNewCategoryChangedAction(data).apply();
    }

    render() {
        return (
            <tr>
                <td/>
                <td>
                    <input
                        type={"text"}
                        onChange={this.onNameChange}
                        autoComplete="off"
                        value={this.props.name}
                        placeholder={this.props.texts.categoryList.name}
                        onKeyUp={this.onKeyUp}
                    />
                    {this.props.nameAlreadyExists === true && this.props.name && this.props.name.length > 0 &&
                    <label>{this.props.texts.categoryList.nameAlreadyExists}</label>}
                </td>
                <td/>
                {this.props.rootDictionaryLookup === true &&
                <td>
                    <input
                        type={"checkbox"}
                        onChange={this.onDictionayLookupChange}
                        checked={this.props.dictionaryLookup}
                        id="dictionaryLookupNewCheckbox"
                    />
                    <label htmlFor="dictionaryLookupNewCheckbox">{this.props.texts.categoryList.dictionaryLookup}</label>
                    <select value={this.props.givenLanguage} onChange={this.onGivenLanguageChange}
                            disabled={!this.props.dictionaryLookup}>
                        <option value="">{this.props.texts.categoryList.languages.emtpy}</option>
                        <option value="de">{this.props.texts.categoryList.languages.de}</option>
                        <option value="en">{this.props.texts.categoryList.languages.en}</option>
                        <option value="fr">{this.props.texts.categoryList.languages.fr}</option>
                    </select>
                    <select value={this.props.wantedLanguage} onChange={this.onWantedLanguageChange}
                            disabled={!this.props.dictionaryLookup}>
                        <option value="">{this.props.texts.categoryList.languages.emtpy}</option>
                        <option value="de">{this.props.texts.categoryList.languages.de}</option>
                        <option value="en">{this.props.texts.categoryList.languages.en}</option>
                        <option value="fr">{this.props.texts.categoryList.languages.fr}</option>
                    </select>
                </td>
                }
                <td>
                    <button
                        disabled={this.props.nameAlreadyExists === true || !this.props.name || this.props.name.length === 0 || this.props.dictionaryLookup && (this.props.givenLanguage.length === 0 || this.props.wantedLanguage.length === 0)}
                        onClick={this.onNewCategory}
                    >
                        {"\u2713"}
                    </button>
                    <button onClick={this.onCancel}>{"\u2717"}</button>
                </td>
            </tr>
        );
    }
}
