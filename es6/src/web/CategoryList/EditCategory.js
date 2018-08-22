import NameOfEditedCategoryChangedAction from "../../author/actions/NameOfEditedCategoryChangedAction";
import GivenLanguageOfEditedCategoryChangedAction
    from "../../author/actions/GivenLanguageOfEditedCategoryChangedAction";
import UpdateCategoryAction from "../../author/actions/UpdateCategoryAction";
import React from "react";
import WantedLanguageOfEditedCategoryChangedAction
    from "../../author/actions/WantedLanguageOfEditedCategoryChangedAction";
import CancelEditCategoryAction from "../../author/actions/CancelEditCategoryAction";
import ToggleDictionaryLookupOfEditedCategoryAction
    from "../../author/actions/ToggleDictionaryLookupOfEditedCategoryAction";

export default class EditCategory extends React.Component {

    constructor(props) {
        super(props);
        this.onNameChange = this.onNameChange.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
        this.onDictionayLookupChange = this.onDictionayLookupChange.bind(this);
        this.onGivenLanguageChange = this.onGivenLanguageChange.bind(this);
        this.onWantedLanguageChange = this.onWantedLanguageChange.bind(this);
    }

    onNameChange(event) {
        const name = event.target.value;
        new NameOfEditedCategoryChangedAction(
            {
                name,
                categoryList: this.props.categoryList,
                originalName: this.props.originalName
            }).apply();
    }

    onCancel() {
        new CancelEditCategoryAction().apply();
    }

    onUpdate() {
        const data = {
            username: this.props.username,
            password: this.props.password,
            categoryId: this.props.categoryId,
            categoryName: this.props.name,
            parentCategoryId: this.props.parentCategoryId,
            dictionaryLookup: this.props.dictionaryLookup,
            givenLanguage: this.props.givenLanguage,
            wantedLanguage: this.props.wantedLanguage
        };
        new UpdateCategoryAction(data).apply();
    }

    onKeyUp(e) {
        e.preventDefault();
        if (e.keyCode === 13 && this.props.nameAlreadyExists === false && this.props.name && this.props.name.length > 0) {
            this.onUpdate();
        }
    }

    onDictionayLookupChange() {
        new ToggleDictionaryLookupOfEditedCategoryAction({dictionaryLookup: this.props.dictionaryLookup}).apply();
    }

    onGivenLanguageChange(e) {
        const data = {
            givenLanguage: e.target.value
        };
        new GivenLanguageOfEditedCategoryChangedAction(data).apply();
    }

    onWantedLanguageChange(e) {
        const data = {
            wantedLanguage: e.target.value
        };
        new WantedLanguageOfEditedCategoryChangedAction(data).apply();
    }

    render() {
        return (
            <tr>
                <td>
                    <input
                        type={"text"}
                        onChange={this.onNameChange}
                        autoComplete="off"
                        value={this.props.name}
                        placeholder={this.props.parentCategoryId === null ? this.props.texts.categoryList.newRootCategory[this.props.language] : this.props.texts.categoryList.newCategory[this.props.language]}
                        onKeyUp={this.onKeyUp}
                    />
                    {this.props.nameAlreadyExists === true && this.props.name && this.props.name.length > 0 &&
                    <i className="fas fa-times error"/>}
                </td>
                <td/>
                {this.props.rootDictionaryLookup === true &&
                <td className="noBreak">
                    <input
                        type={"checkbox"}
                        onChange={this.onDictionayLookupChange}
                        checked={this.props.dictionaryLookup}
                        value={this.props.dictionaryLookup}
                        id="dictionaryLookupEditCheckbox"
                    />
                    <select value={this.props.givenLanguage} onChange={this.onGivenLanguageChange}
                            disabled={!this.props.dictionaryLookup}>
                        <option
                            value="">{this.props.texts.categoryList.languages.emtpyFrom[this.props.language]}</option>
                        <option value="de">{this.props.texts.categoryList.languages.de[this.props.language]}</option>
                        <option value="en">{this.props.texts.categoryList.languages.en[this.props.language]}</option>
                        <option value="fr">{this.props.texts.categoryList.languages.fr[this.props.language]}</option>
                    </select>
                    <select value={this.props.wantedLanguage} onChange={this.onWantedLanguageChange}
                            disabled={!this.props.dictionaryLookup}>
                        <option value="">{this.props.texts.categoryList.languages.emtpyTo[this.props.language]}</option>
                        <option value="de">{this.props.texts.categoryList.languages.de[this.props.language]}</option>
                        <option value="en">{this.props.texts.categoryList.languages.en[this.props.language]}</option>
                        <option value="fr">{this.props.texts.categoryList.languages.fr[this.props.language]}</option>
                    </select>
                </td>
                }
                <td className="noBreak">
                    <button
                        disabled={this.props.nameAlreadyExists === true || !this.props.name || this.props.name.length === 0 || this.props.dictionaryLookup && (this.props.givenLanguage.length === 0 || this.props.wantedLanguage.length === 0)}
                        onClick={this.onUpdate}>
                        <i className="fas fa-check"/>
                    </button>
                    <button
                        onClick={this.onCancel}>
                        <i className="fas fa-times"/>
                    </button>
                </td>
            </tr>
        );
    }
}

