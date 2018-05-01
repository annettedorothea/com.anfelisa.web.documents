import React from 'react';
import RouteAction from "../common/actions/RouteAction";
import DeleteUserAction from "../admin/actions/DeleteUserAction";
import Confirm from "./Confirm";
import SaveRoleAction from "../admin/actions/SaveRoleAction";
import CheckUsernameAction from "../common/actions/CheckUsernameAction";
import CreateCategoryAction from "../author/actions/CreateCategoryAction";
import DeleteCategoryAction from "../author/actions/DeleteCategoryAction";
import UpdateCategoryAction from "../author/actions/UpdateCategoryAction";

export default class CategoryList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            newName: "",
            newNameAlreadyExists: false,
            newIndex: "",
            editId: "",
            editName: "",
            editameAlreadyExists: false,
            editIndex: "",
            confirmDelete: false,
            categoryId: ""
        };
        this.onDelete = this.onDelete.bind(this);
        this.onDeleteClick = this.onDeleteClick.bind(this);
        this.onDeleteCancel = this.onDeleteCancel.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onIndexChange = this.onIndexChange.bind(this);
        this.onNewCategory = this.onNewCategory.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onEditNameChange = this.onEditNameChange.bind(this);
        this.onEditIndexChange = this.onEditIndexChange.bind(this);
        this.onUpdateCategory = this.onUpdateCategory.bind(this);
        this.onCancelEdit = this.onCancelEdit.bind(this);
    }

    onNameChange(event) {
        const name = event.target.value;
        const items = this.props.data.categoryList.filter(item => {
            return item.categoryName === name;
        });
        this.setState(
            {
                newName: name,
                newNameAlreadyExists: items.length > 0
            }
        );
    }

    onEditNameChange(event) {
        const name = event.target.value;
        const items = this.props.data.categoryList.filter(item => {
            return item.categoryName === name && item.categoryId !== this.state.editId;
        });
        this.setState(
            {
                editName: name,
                editNameAlreadyExists: items.length > 0
            }
        );
    }

    onIndexChange(event) {
        const index = event.target.value;
        this.setState(
            {
                newIndex: index
            }
        );
    }

    onEditIndexChange(event) {
        const index = event.target.value;
        this.setState(
            {
                editIndex: index
            }
        );
    }

    onDeleteClick(categoryId) {
        this.setState({
            confirmDelete: true,
            categoryId
        });
    }

    onDelete() {
        const data = {
            username: this.props.username,
            categoryId: this.state.categoryId,
            password: this.props.password,
            parentCategoryId: this.props.data.parentCategoryId
        };
        this.setState({confirmDelete: false});
        new DeleteCategoryAction(data).apply();
    }

    onDeleteCancel() {
        this.setState({confirmDelete: false});
    }

    onNewCategory() {
        const data = {
            username: this.props.username,
            password: this.props.password,
            categoryName: this.state.newName,
            categoryIndex: this.state.newIndex,
            parentCategoryId: this.props.data.parentCategoryId
        };
        this.setState(
            {
                newName: "",
                newNameAlreadyExists: false,
                newIndex: ""
            }
        );
        new CreateCategoryAction(data).apply();
    }

    onEdit(category) {
        this.setState(
            {
                editId: category.categoryId,
                editName: category.categoryName,
                editameAlreadyExists: false,
                editIndex: category.categoryIndex
            }
        );
    }

    onUpdateCategory() {
        const data = {
            username: this.props.username,
            password: this.props.password,
            categoryId: this.state.editId,
            categoryName: this.state.editName,
            categoryIndex: this.state.editIndex,
            parentCategoryId: this.props.data.parentCategoryId
        };
        this.setState(
            {
                editId: "",
                editName: "",
                editameAlreadyExists: false,
                editIndex: ""
            }
        );
        new UpdateCategoryAction(data).apply();
    }

    onCancelEdit() {
        this.setState(
            {
                editId: "",
                editName: "",
                editameAlreadyExists: false,
                editIndex: ""
            }
        );
    }

    render() {
        const categoryItems = this.props.data.categoryList.map((category) => {
            if (category.categoryId === this.state.editId) {
                return <EditCategory
                    key={category.categoryId}
                    onNameChange={this.onEditNameChange}
                    onIndexChange={this.onEditIndexChange}
                    onCancelEdit={this.onCancelEdit}
                    onUpdateCategory={this.onUpdateCategory}
                    name={this.state.editName}
                    nameAlreadyExists={this.state.editNameAlreadyExists}
                    index={this.state.editIndex}
                    texts={this.props.texts}
                />
            } else {
                return <CategoryItem
                    {...category}
                    key={category.categoryId}
                    texts={this.props.texts}
                    onDeleteClick={this.onDeleteClick}
                    onEdit={this.onEdit}
                    username={this.props.username}
                    password={this.props.password}
                />
            }
        });
        categoryItems.push(
            <NewCategory
                key="new"
                {...this.props}
                name={this.state.newName}
                index={this.state.newIndex}
                nameAlreadyExists={this.state.newNameAlreadyExists}
                onNameChange={this.onNameChange}
                onIndexChange={this.onIndexChange}
                onNewCategory={this.onNewCategory}
            />
        );
        return (
            <div>
                {this.state.confirmDelete === true &&
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
                        hash: "#dashboard"
                    }).apply()}>{this.props.texts.categoryList.back}
                </button>

            </div>
        );
    }
}

class NewCategory extends React.Component {

    render() {
        return (
            <tr>
                <td>
                    <input
                        type={"text"}
                        onChange={this.props.onNameChange}
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
                        onChange={this.props.onIndexChange}
                        autoComplete="off"
                        value={this.props.index}
                        placeholder={this.props.texts.categoryList.index}
                    />
                </td>
                <td/>
                <td>
                    <button
                        disabled={this.props.nameAlreadyExists === true || this.props.name.length === 0}
                        onClick={this.props.onNewCategory}
                    >{this.props.texts.categoryList.ok}</button>
                </td>
            </tr>
        );
    }
}

class EditCategory extends React.Component {

    render() {
        return (
            <tr>
                <td>
                    <input
                        type={"text"}
                        onChange={this.props.onNameChange}
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
                        onChange={this.props.onIndexChange}
                        autoComplete="off"
                        value={this.props.index}
                        placeholder={this.props.texts.categoryList.index}
                    />
                </td>
                <td/>
                <td>
                    <button
                        disabled={this.props.nameAlreadyExists === true || this.props.name.length === 0}
                        onClick={this.props.onUpdateCategory}
                    >{this.props.texts.categoryList.ok}</button>
                    <button
                        onClick={this.props.onCancelEdit}
                    >{this.props.texts.categoryList.cancel}</button>
                </td>
            </tr>
        );
    }
}

class CategoryItem extends React.Component {

    render() {
        return (
            <tr
                onDoubleClick={() => this.props.onEdit(this.props)}
            >
                <td
                    onClick={() => new RouteAction(
                        {
                            username: this.props.username,
                            password: this.props.password,
                            hash: `#categories/${this.props.categoryId}`
                        }).apply()}
                >{this.props.categoryName}</td>
                <td>{this.props.categoryIndex}</td>
                <td>{this.props.categoryAuthor}</td>
                <td>
                    <button
                        onClick={() => this.props.onDeleteClick(this.props.categoryId)}
                    >{"\u2717"}</button>
                </td>
            </tr>
        );
    }
}

