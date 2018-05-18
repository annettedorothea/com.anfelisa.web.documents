import React from 'react';
import RouteAction from "../common/actions/RouteAction";
import Confirm from "./Confirm";
import CreateCategoryAction from "../author/actions/CreateCategoryAction";
import DeleteCategoryAction from "../author/actions/DeleteCategoryAction";
import UpdateCategoryAction from "../author/actions/UpdateCategoryAction";
import NameOfNewCategoryChangedAction from "../author/actions/NameOfNewCategoryChangedAction";
import IndexOfNewCategoryChangedAction from "../author/actions/IndexOfNewCategoryChangedAction";
import CancelNewCategoryAction from "../author/actions/CancelNewCategoryAction";
import NameOfEditedCategoryChangedAction from "../author/actions/NameOfEditedCategoryChangedAction";
import IndexOfEditedCategoryChangedAction from "../author/actions/IndexOfEditedCategoryChangedAction";
import CancelEditCategoryAction from "../author/actions/CancelEditCategoryAction";
import EditCategoryAction from "../author/actions/EditCategoryAction";
import DeleteCategoryClickAction from "../author/actions/DeleteCategoryClickAction";
import CancelDeleteCategoryAction from "../author/actions/CancelDeleteCategoryAction";
import CardList from "./CardList";
import ToggleDictionaryLookupOfNewCategoryAction from "../author/actions/ToggleDictionaryLookupOfNewCategoryAction";
import GivenLanguageOfNewCategoryChangedAction from "../author/actions/GivenLanguageOfNewCategoryChangedAction";
import WantedLanguageOfNewCategoryChangedAction from "../author/actions/WantedLanguageOfNewCategoryChangedAction";
import ToggleDictionaryLookupOfEditedCategoryAction
    from "../author/actions/ToggleDictionaryLookupOfEditedCategoryAction";
import GivenLanguageOfEditedCategoryChangedAction from "../author/actions/GivenLanguageOfEditedCategoryChangedAction";
import WantedLanguageOfEditedCategoryChangedAction from "../author/actions/WantedLanguageOfEditedCategoryChangedAction";

export default class CategoryList extends React.Component {

    constructor(props) {
        super(props);
        this.onEdit = this.onEdit.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onDeleteClick = this.onDeleteClick.bind(this);
        this.onDeleteCancel = this.onDeleteCancel.bind(this);
    }

    onDeleteClick(categoryId) {
        new DeleteCategoryClickAction({categoryId}).apply();
    }

    onEdit(categoryId, name, index, dictionaryLookup, givenLanguage, wantedLanguage) {
        const data = {
            categoryId,
            name,
            index,
            dictionaryLookup,
            givenLanguage,
            wantedLanguage
        };
        this.setState({confirmDelete: false});
        new EditCategoryAction(data).apply();
    }

    onDelete() {
        const data = {
            username: this.props.username,
            categoryId: this.props.data.deleteCategory.categoryId,
            password: this.props.password,
            parentCategoryId: this.props.data.parentCategoryId
        };
        new DeleteCategoryAction(data).apply();
    }

    onDeleteCancel() {
        new CancelDeleteCategoryAction().apply();
    }

    render() {
        let backLink = "#dashboard";
        if (this.props.data.grandParentCategoryId) {
            backLink = `#categories/${this.props.data.grandParentCategoryId}`;
        } else if (this.props.data.parentCategoryId) {
            backLink = "#categories";
        }
        const categoryItems = this.props.data.categoryList.map((category) => {
            if (category.categoryId === this.props.data.editedCategory.categoryId) {
                return <EditCategory
                    key={category.categoryId}
                    categoryId={this.props.data.editedCategory.categoryId}
                    name={this.props.data.editedCategory.name}
                    index={this.props.data.editedCategory.index}
                    nameAlreadyExists={this.props.data.editedCategory.nameAlreadyExists}
                    categoryList={this.props.data.categoryList}
                    username={this.props.username}
                    password={this.props.password}
                    parentCategoryId={this.props.data.parentCategoryId}
                    dictionaryLookup={this.props.data.editedCategory.dictionaryLookup}
                    givenLanguage={this.props.data.editedCategory.givenLanguage}
                    wantedLanguage={this.props.data.editedCategory.wantedLanguage}
                    texts={this.props.texts}
                />
            } else {
                return <CategoryItem
                    {...category}
                    key={category.categoryId}
                    texts={this.props.texts}
                    onDeleteClick={this.onDeleteClick}
                    onEdit={() => this.onEdit(category.categoryId, category.categoryName, category.categoryIndex, category.dictionaryLookup, category.givenLanguage, category.wantedLanguage)}
                    username={this.props.username}
                    password={this.props.password}
                    userRole={this.props.role}
                    givenLanguage={category.givenLanguage}
                    wantedLanguage={category.wantedLanguage}
                />
            }
        });
        categoryItems.push(
            <NewCategory
                key="new"
                name={this.props.data.newCategory.name}
                index={this.props.data.newCategory.index}
                nameAlreadyExists={this.props.data.newCategory.nameAlreadyExists}
                categoryList={this.props.data.categoryList}
                username={this.props.username}
                password={this.props.password}
                parentCategoryId={this.props.data.parentCategoryId}
                dictionaryLookup={this.props.data.newCategory.dictionaryLookup}
                givenLanguage={this.props.data.newCategory.givenLanguage}
                wantedLanguage={this.props.data.newCategory.wantedLanguage}
                texts={this.props.texts}
            />
        );
        return (
            <div>
                {this.props.data.deleteCategory.confirmDelete === true &&
                <div>
                    <Confirm {...
                        {
                            title: this.props.texts.categoryList.confirmDelete.title,
                            message: this.props.texts.categoryList.confirmDelete.message,
                            okText: this.props.texts.categoryList.confirmDelete.ok,
                            cancelText: this.props.texts.categoryList.confirmDelete.cancel,
                            ok: this.onDelete,
                            cancel: this.onDeleteCancel
                        }}/>
                </div>}
                <h1>
                    {this.props.data.parentCategoryName && this.props.data.parentCategoryName}
                    {!this.props.data.parentCategoryName && this.props.texts.categoryList.title}
                </h1>
                <table>
                    <thead>

                    </thead>
                    <tbody>
                    {categoryItems}
                    </tbody>
                </table>

                {this.props.data.parentCategoryId && <CardList {...this.props} />}

                <button
                    onClick={() => new RouteAction({
                        username: this.props.username,
                        password: this.props.password,
                        hash: backLink
                    }).apply()}>{this.props.texts.categoryList.back}
                </button>

            </div>
        );
    }
}

class NewCategory extends React.Component {

    constructor(props) {
        super(props);
        this.onNameChange = this.onNameChange.bind(this);
        this.onIndexChange = this.onIndexChange.bind(this);
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

    onIndexChange(event) {
        const index = event.target.value;
        new IndexOfNewCategoryChangedAction({index}).apply();
    }

    onCancel() {
        new CancelNewCategoryAction().apply();
    }

    onNewCategory() {
        const data = {
            username: this.props.username,
            password: this.props.password,
            categoryName: this.props.name,
            categoryIndex: this.props.index,
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
                <td>
                    <input
                        type={"number"}
                        onChange={this.onIndexChange}
                        autoComplete="off"
                        value={this.props.index}
                        placeholder={this.props.texts.categoryList.index}
                        onKeyUp={this.onKeyUp}
                    />
                </td>
                <td>
                    <input
                        type={"checkbox"}
                        onChange={this.onDictionayLookupChange}
                        checked={this.props.dictionaryLookup}
                    />
                    <label>{this.props.texts.categoryList.dictionaryLookup}</label>
                </td>
                <td>
                    <select value={this.props.givenLanguage} onChange={this.onGivenLanguageChange}
                            disabled={!this.props.dictionaryLookup}>
                        <option value="">{this.props.texts.categoryList.languages.emtpy}</option>
                        <option value="de">{this.props.texts.categoryList.languages.de}</option>
                        <option value="en">{this.props.texts.categoryList.languages.en}</option>
                        <option value="fr">{this.props.texts.categoryList.languages.fr}</option>
                    </select>
                </td>
                <td>
                    <select value={this.props.wantedLanguage} onChange={this.onWantedLanguageChange}
                            disabled={!this.props.dictionaryLookup}>
                        <option value="">{this.props.texts.categoryList.languages.emtpy}</option>
                        <option value="de">{this.props.texts.categoryList.languages.de}</option>
                        <option value="en">{this.props.texts.categoryList.languages.en}</option>
                        <option value="fr">{this.props.texts.categoryList.languages.fr}</option>
                    </select>
                </td>
                <td/>
                <td>
                    <button
                        disabled={this.props.nameAlreadyExists === true || !this.props.name || this.props.name.length === 0 || this.props.dictionaryLookup && (this.props.givenLanguage.length === 0 || this.props.wantedLanguage.length === 0)}
                        onClick={this.onNewCategory}
                    >{this.props.texts.categoryList.ok}</button>
                    <button
                        onClick={this.onCancel}
                    >{this.props.texts.categoryList.cancel}</button>
                </td>
            </tr>
        );
    }
}

class EditCategory extends React.Component {

    constructor(props) {
        super(props);
        this.onNameChange = this.onNameChange.bind(this);
        this.onIndexChange = this.onIndexChange.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
        this.onDictionayLookupChange = this.onDictionayLookupChange.bind(this);
        this.onGivenLanguageChange = this.onGivenLanguageChange.bind(this);
        this.onWantedLanguageChange = this.onWantedLanguageChange.bind(this);
    }

    onNameChange(event) {
        const name = event.target.value;
        new NameOfEditedCategoryChangedAction({name, categoryList: this.props.categoryList}).apply();
    }

    onIndexChange(event) {
        const index = event.target.value;
        new IndexOfEditedCategoryChangedAction({index}).apply();
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
            categoryIndex: this.props.index,
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
        new ToggleDictionaryLookupOfEditedCategoryAction().apply();
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
                        placeholder={this.props.texts.categoryList.name}
                        onKeyUp={this.onKeyUp}
                    />
                    {this.props.nameAlreadyExists === true && this.props.name && this.props.name.length > 0 &&
                    <label>{this.props.texts.categoryList.nameAlreadyExists}</label>}
                </td>
                <td>
                    <input
                        type={"number"}
                        onChange={this.onIndexChange}
                        autoComplete="off"
                        value={this.props.index}
                        placeholder={this.props.texts.categoryList.index}
                        onKeyUp={this.onKeyUp}
                    />
                </td>
                <td>
                    <input
                        type={"checkbox"}
                        onChange={this.onDictionayLookupChange}
                        checked={this.props.dictionaryLookup}
                    />
                    <label>{this.props.texts.categoryList.dictionaryLookup}</label>
                </td>
                <td>
                    <select value={this.props.givenLanguage} onChange={this.onGivenLanguageChange}
                            disabled={!this.props.dictionaryLookup}>
                        <option value="">{this.props.texts.categoryList.languages.emtpy}</option>
                        <option value="de">{this.props.texts.categoryList.languages.de}</option>
                        <option value="en">{this.props.texts.categoryList.languages.en}</option>
                        <option value="fr">{this.props.texts.categoryList.languages.fr}</option>
                    </select>
                </td>
                <td>
                    <select value={this.props.wantedLanguage} onChange={this.onWantedLanguageChange}
                            disabled={!this.props.dictionaryLookup}>
                        <option value="">{this.props.texts.categoryList.languages.emtpy}</option>
                        <option value="de">{this.props.texts.categoryList.languages.de}</option>
                        <option value="en">{this.props.texts.categoryList.languages.en}</option>
                        <option value="fr">{this.props.texts.categoryList.languages.fr}</option>
                    </select>
                </td>
                <td/>
                <td>
                    <button
                        disabled={this.props.nameAlreadyExists === true || !this.props.name || this.props.name.length === 0 || this.props.dictionaryLookup && (this.props.givenLanguage.length === 0 || this.props.wantedLanguage.length === 0)}
                        onClick={this.onUpdate}
                    >{this.props.texts.categoryList.ok}</button>
                    <button
                        onClick={this.onCancel}
                    >{this.props.texts.categoryList.cancel}</button>
                </td>
            </tr>
        );
    }
}

class CategoryItem extends React.Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        new RouteAction(
            {
                username: this.props.username,
                password: this.props.password,
                hash: `#categories/${this.props.categoryId}`
            }).apply();
    }

    render() {
        console.log(this.props);
        return (
            <tr>
                <td onClick={this.onClick}>{this.props.categoryName}</td>
                <td onClick={this.onClick}>{this.props.categoryIndex}</td>
                <td onClick={this.onClick}>{this.props.categoryAuthor}</td>
                <td onClick={this.onClick}>{this.props.texts.categoryList.languages[this.props.givenLanguage]}</td>
                <td onClick={this.onClick}>{this.props.texts.categoryList.languages[this.props.wantedLanguage]}</td>
                <td>
                    {this.props.userRole === "ADMIN" &&
                    <button disabled={!this.props.empty} onClick={() => this.props.onDeleteClick(this.props.categoryId)}>{"\u2717"}</button>}
                    <button onClick={() => this.props.onEdit(this.props)}>{"\u270E"}</button>
                </td>
            </tr>
        );
    }
}

