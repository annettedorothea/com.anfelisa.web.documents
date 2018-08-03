import React from 'react';
import RouteAction from "../common/actions/RouteAction";
import Confirm from "./Confirm";
import DeleteCategoryAction from "../author/actions/DeleteCategoryAction";
import EditCategoryAction from "../author/actions/EditCategoryAction";
import DeleteCategoryClickAction from "../author/actions/DeleteCategoryClickAction";
import CancelDeleteCategoryAction from "../author/actions/CancelDeleteCategoryAction";
import CardList from "./CardList";
import NewCategory from "./CategoryList/NewCategory"
import EditCategory from "./CategoryList/EditCategory"
import CategoryItem from "./CategoryList/CategoryItem"
import UserAccessItem from "./CategoryList/UserAccessItem"
import CreateBoxAction from "../box/actions/CreateBoxAction";
import CancelRevokeUserAccessAction from "../author/actions/CancelRevokeUserAccessAction";
import RevokeUserAccessAction from "../author/actions/RevokeUserAccessAction";
import InviteUser from "./CategoryList/InviteUser";

export default class CategoryList extends React.Component {

    constructor(props) {
        super(props);
        this.onEdit = this.onEdit.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onDeleteClick = this.onDeleteClick.bind(this);
        this.onDeleteCancel = this.onDeleteCancel.bind(this);
        this.onRevokeUserAccess = this.onRevokeUserAccess.bind(this);
        this.onRevokeUserAccessCancel = this.onRevokeUserAccessCancel.bind(this);
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

    onSubscribe(categoryId) {
        const data = {
            username: this.props.username,
            password: this.props.password,
            categoryId: categoryId,
            maxInterval: null
        };
        new CreateBoxAction(data).apply();
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

    onRevokeUserAccess() {
        const data = {
            categoryId: this.props.data.parentCategoryId,
            revokedUserId: this.props.data.revokeUserAccess.userId,
            parentCategoryId: this.props.data.parentCategoryId
        };
        new RevokeUserAccessAction(data).apply();
    }

    onRevokeUserAccessCancel() {
        new CancelRevokeUserAccessAction().apply();
    }

    render() {
        let backLink = "#dashboard";
        if (this.props.data.grandParentCategoryId) {
            backLink = `#categories/${this.props.data.grandParentCategoryId}`;
        } else if (this.props.data.parentCategoryId) {
            backLink = "#categories";
        }
        if (!this.props.data.editedCategory || !this.props.data.newCategory || !this.props.data.deleteCategory) {
            return "";
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
                    rootDictionaryLookup={this.props.data.rootDictionaryLookup}
                    givenLanguage={this.props.data.editedCategory.givenLanguage}
                    wantedLanguage={this.props.data.editedCategory.wantedLanguage}
                    texts={this.props.texts}
                    language={this.props.language}
                />
            } else {
                return <CategoryItem
                    {...category}
                    key={category.categoryId}
                    texts={this.props.texts}
                    language={this.props.language}
                    onDeleteClick={this.onDeleteClick}
                    onEdit={() => this.onEdit(category.categoryId, category.categoryName, category.categoryIndex, category.dictionaryLookup, category.givenLanguage, category.wantedLanguage)}
                    onSubscribe={() => this.onSubscribe(category.categoryId)}
                    username={this.props.username}
                    password={this.props.password}
                    userRole={this.props.role}
                    givenLanguage={category.givenLanguage}
                    wantedLanguage={category.wantedLanguage}
                    rootDictionaryLookup={this.props.data.rootDictionaryLookup}
                />
            }
        });
        if (this.props.data.parentCategoryId === null || this.props.data.parentEditable === true) {
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
                    rootDictionaryLookup={this.props.data.rootDictionaryLookup}
                    givenLanguage={this.props.data.newCategory.givenLanguage}
                    wantedLanguage={this.props.data.newCategory.wantedLanguage}
                    texts={this.props.texts}
                    language={this.props.language}
                />
            );
        }
        const users = this.props.data.userList === null ? [] : this.props.data.userList.map((user) => {
            return <UserAccessItem
                {...user}
                texts={this.props.texts}
                language={this.props.language}
                canRevoke={this.props.data.parentEditable && this.props.data.userList.length > 1}
                key={user.userId}
            />
        });
        if (this.props.data.parentEditable === true && this.props.data.userList !== null) {
            users.push(
                <InviteUser
                    texts={this.props.texts}
                    language={this.props.language}
                    key="inviteUser"
                    parentCategoryId={this.props.data.parentCategoryId}
                    username={this.props.username}
                    password={this.props.password}
                />)
        }

        if (this.props.data.categoryList.length === 0 && this.props.data.parentEditable === false) {
            return <h2>{this.props.texts.categoryList.noCategories[this.props.language]}</h2>
        }

        return (
            <div className="categoryList">
                {this.props.data.deleteCategory.confirmDelete === true &&
                <div>
                    <Confirm {...
                        {
                            title: this.props.texts.categoryList.confirmDelete.title[this.props.language],
                            message: this.props.texts.categoryList.confirmDelete.message[this.props.language],
                            okText: this.props.texts.categoryList.confirmDelete.ok[this.props.language],
                            cancelText: this.props.texts.categoryList.confirmDelete.cancel[this.props.language],
                            ok: this.onDelete,
                            cancel: this.onDeleteCancel
                        }}/>
                </div>}
                {this.props.data.revokeUserAccess.confirmDelete === true &&
                <div>
                    <Confirm {...
                        {
                            title: this.props.texts.categoryList.confirmRevokeUserAccess.title[this.props.language],
                            message: this.props.texts.categoryList.confirmRevokeUserAccess.message[this.props.language],
                            okText: this.props.texts.categoryList.confirmRevokeUserAccess.ok[this.props.language],
                            cancelText: this.props.texts.categoryList.confirmRevokeUserAccess.cancel[this.props.language],
                            ok: this.onRevokeUserAccess,
                            cancel: this.onRevokeUserAccessCancel
                        }}/>
                </div>}
                <table className={this.props.data.parentCategoryId === null ? "root" : "sub"}>
                    <thead>

                    </thead>
                    <tbody>
                    {categoryItems}
                    </tbody>
                </table>

            </div>
        );
    }
}


