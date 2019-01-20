import React from 'react';
import CategoryItem from "./CategoryItem";
import NewCategory from "./NewCategory";
import Confirm from "../Confirm";
import InviteUser from "./InviteUser";
import EditCategory from "./EditCategory";
import {
    cancelDeleteCategory,
    deleteCategory,
    deleteCategoryClick,
    editCategoryClick,
    inviteUserClick,
    newCategoryClick
} from "../../../gen/category/ActionFunctions";
import {createBox} from "../../../gen/box/ActionFunctions";
import {route} from "../../../gen/common/ActionFunctions";

export default class CategoryTree extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const categoryItems = this.props.categoryList.map((category) => {
            return <CategoryItem
                {...category}
                childCategories={category.childCategories}
                depth={0}
                selectedCategory={this.props.selectedCategory}
                texts={this.props.texts}
                language={this.props.language}
                key={category.categoryId}
                dropAllowed={this.props.dropAllowed}
                dropTargetCategoryId={this.props.dropTargetCategoryId}
            />
        });

        return (
            <div className="categoryTree">
                {this.props.displayNewCategory &&
                <NewCategory
                    selectedCategory={this.props.selectedCategory}
                    categoryName={this.props.categoryName}
                    givenLanguage={this.props.givenLanguage}
                    wantedLanguage={this.props.wantedLanguage}
                    dictionaryLookup={this.props.dictionaryLookup}
                    texts={this.props.texts}
                    language={this.props.language}
                />}
                {this.props.displayEditCategory &&
                <EditCategory
                    selectedCategory={this.props.selectedCategory}
                    categoryName={this.props.categoryName}
                    givenLanguage={this.props.givenLanguage}
                    wantedLanguage={this.props.wantedLanguage}
                    dictionaryLookup={this.props.dictionaryLookup}
                    texts={this.props.texts}
                    language={this.props.language}
                />}
                {this.props.displayDeleteCategory === true &&
                <Confirm {...
                    {
                        title: this.props.texts.categoryTree.confirmDelete.title[this.props.language],
                        message: this.props.texts.categoryTree.confirmDelete.message[this.props.language],
                        okText: this.props.texts.categoryTree.confirmDelete.ok[this.props.language],
                        cancelText: this.props.texts.categoryTree.confirmDelete.cancel[this.props.language],
                        ok: () => deleteCategory(),
                        cancel: () => cancelDeleteCategory()
                    }}/>
                }
                {this.props.displayInviteUser === true &&
                <InviteUser
                    texts={this.props.texts}
                    language={this.props.language}
                    invitedUsername={this.props.invitedUsername}
                    userList={this.props.userList}
                />
                }

                <button className="backButton"
                        onClick={() => route("#dashboard")}>
                    {this.props.texts.categoryTree.back[this.props.language]}
                </button>
                <button
                    onClick={() => newCategoryClick()}>
                    <i className="fas fa-plus"/>
                </button>
                <button
                    disabled={!this.props.selectedCategory || !this.props.selectedCategory.editable}
                    onClick={() => editCategoryClick()}>
                    <i className="fas fa-pen"/>
                </button>
                <button
                    disabled={!this.props.selectedCategory || !this.props.selectedCategory.editable || !this.props.selectedCategory.empty}
                    onClick={() => deleteCategoryClick()}>
                    <i className="fas fa-times"/>
                </button>
                <button
                    disabled={!this.props.selectedCategory || this.props.selectedCategory.parentCategoryId !== undefined || this.props.selectedCategory.hasBox === undefined || this.props.selectedCategory.hasBox === true}
                    onClick={() => createBox()}>
                    <i className="fas fa-sign-in-alt"/>
                </button>
                <button
                    disabled={!this.props.selectedCategory || this.props.selectedCategory.parentCategoryId !== undefined}
                    onClick={() => {
                        inviteUserClick();
                    }}>
                    <i className="fas fa-users"/>
                </button>
                <div className="categoryTreeItems">
                    {categoryItems}
                </div>

            </div>
        );
    }
}


