import React from 'react';
import RouteAction from "../../common/actions/RouteAction";
import CategoryItem from "./CategoryItem";
import NewCategoryClickAction from "../../category/actions/NewCategoryClickAction";
import NewCategory from "./NewCategory";
import Confirm from "../Confirm";
import CancelDeleteCategoryAction from "../../category/actions/CancelDeleteCategoryAction";
import DeleteCategoryClickAction from "../../category/actions/DeleteCategoryClickAction";
import DeleteCategoryAction from "../../category/actions/DeleteCategoryAction";
import EditCategory from "./EditCategory";
import EditCategoryClickAction from "../../category/actions/EditCategoryClickAction";
import CreateBoxAction from "../../box/actions/CreateBoxAction";

export default class CategoryTree extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const categoryItems = this.props.data.categoryList.map((category) => {
            return <CategoryItem
                {...category}
                childCategories={category.childCategories}
                depth={0}
                selectedCategory={this.props.data.selectedCategory}
                texts={this.props.texts}
                language={this.props.language}
                key={category.categoryId}
            />
        });

        return (
            <div className="categoryTree">
                {this.props.data.displayNewCategory &&
                <NewCategory
                    selectedCategory={this.props.data.selectedCategory}
                    categoryName={this.props.data.categoryName}
                    categoryNameAlreadyExists={this.props.data.categoryNameAlreadyExists}
                    givenLanguage={this.props.data.givenLanguage}
                    wantedLanguage={this.props.data.wantedLanguage}
                    dictionaryLookup={this.props.data.dictionaryLookup}
                    texts={this.props.texts}
                    language={this.props.language}
                />}
                {this.props.data.displayEditCategory &&
                <EditCategory
                    selectedCategory={this.props.data.selectedCategory}
                    categoryName={this.props.data.categoryName}
                    categoryNameAlreadyExists={this.props.data.categoryNameAlreadyExists}
                    givenLanguage={this.props.data.givenLanguage}
                    wantedLanguage={this.props.data.wantedLanguage}
                    dictionaryLookup={this.props.data.dictionaryLookup}
                    texts={this.props.texts}
                    language={this.props.language}
                />}
                {this.props.data.displayDeleteCategory === true &&
                <Confirm {...
                    {
                        title: this.props.texts.categoryTree.confirmDelete.title[this.props.language],
                        message: this.props.texts.categoryTree.confirmDelete.message[this.props.language],
                        okText: this.props.texts.categoryTree.confirmDelete.ok[this.props.language],
                        cancelText: this.props.texts.categoryTree.confirmDelete.cancel[this.props.language],
                        ok: () => new DeleteCategoryAction().apply(),
                        cancel: () => new CancelDeleteCategoryAction().apply()
                    }}/>
                }

                <button className="backButton"
                        onClick={() => new RouteAction("#dashboard").apply()}>
                    {this.props.texts.categoryTree.back[this.props.language]}
                </button>
                <button
                    onClick={() => {
                        new NewCategoryClickAction().apply()
                    }}>
                    <i className="fas fa-plus"/>
                </button>
                <button
                    disabled={!this.props.data.selectedCategory || !this.props.data.selectedCategory.editable}
                    onClick={() => {
                        new EditCategoryClickAction().apply()
                    }}>
                    <i className="fas fa-pen"/>
                </button>
                <button
                    disabled={!this.props.data.selectedCategory || !this.props.data.selectedCategory.editable || !this.props.data.selectedCategory.empty}
                    onClick={() => new DeleteCategoryClickAction().apply()}>
                    <i className="fas fa-times"/>
                </button>
                <button
                    disabled={!this.props.data.selectedCategory || this.props.data.selectedCategory.parentCategoryId !== undefined || this.props.data.selectedCategory.hasBox === undefined || this.props.data.selectedCategory.hasBox === true}
                    onClick={() => {
                        new CreateBoxAction().apply();
                    }}>
                    <i className="fas fa-sign-in-alt"/>
                </button>
                <div className="categoryTreeItems">
                    {categoryItems}
                </div>

            </div>
        );
    }
}


