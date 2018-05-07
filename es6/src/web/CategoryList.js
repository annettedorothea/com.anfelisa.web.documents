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

    onEdit(categoryId, name, index) {
        const data = {
            categoryId,
            name,
            index
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
                    texts={this.props.texts}
                />
            } else {
                return <CategoryItem
                    {...category}
                    key={category.categoryId}
                    texts={this.props.texts}
                    onDeleteClick={this.onDeleteClick}
                    onEdit={() => this.onEdit(category.categoryId, category.categoryName, category.categoryIndex)}
                    username={this.props.username}
                    password={this.props.password}
                    userRole={this.props.role}
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
            parentCategoryId: this.props.parentCategoryId
        };
        new CreateCategoryAction(data).apply();
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
                    />
                    {this.props.nameAlreadyExists === true && this.props.name.length > 0 &&
                    <label>{this.props.texts.categoryList.nameAlreadyExists}</label>}
                </td>
                <td>
                    <input
                        type={"number"}
                        onChange={this.onIndexChange}
                        autoComplete="off"
                        value={this.props.index}
                        placeholder={this.props.texts.categoryList.index}
                    />
                </td>
                <td/>
                <td>
                    <button
                        disabled={this.props.nameAlreadyExists === true || this.props.name.length === 0}
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
            parentCategoryId: this.props.parentCategoryId
        };
        new UpdateCategoryAction(data).apply();
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
                    />
                    {this.props.nameAlreadyExists === true && this.props.name.length > 0 &&
                    <label>{this.props.texts.categoryList.nameAlreadyExists}</label>}
                </td>
                <td>
                    <input
                        type={"number"}
                        onChange={this.onIndexChange}
                        autoComplete="off"
                        value={this.props.index}
                        placeholder={this.props.texts.categoryList.index}
                    />
                </td>
                <td/>
                <td>
                    <button
                        disabled={this.props.nameAlreadyExists === true || this.props.name.length === 0}
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
        console.log("this.props.userRole", this.props.userRole);
        return (
            <tr>
                <td onClick={this.onClick}>{this.props.categoryName}</td>
                <td onClick={this.onClick}>{this.props.categoryIndex}</td>
                <td onClick={this.onClick}>{this.props.categoryAuthor}</td>
                <td>
                    {this.props.userRole === "ADMIN" &&
                    <button onClick={() => this.props.onDeleteClick(this.props.categoryId)}>{"\u2717"}</button>}
                    <button onClick={() => this.props.onEdit(this.props)}>{"\u270E"}</button>
                </td>
            </tr>
        );
    }
}

