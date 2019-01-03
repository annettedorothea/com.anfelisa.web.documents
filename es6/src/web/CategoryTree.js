import React from 'react';
import RouteAction from "../common/actions/RouteAction";
import CategoryItem from "./CategoryTree/CategoryItem";
import NewCategoryClickAction from "../category/actions/NewCategoryClickAction";
import NewCategory from "./CategoryTree/NewCategory";
import Confirm from "./Confirm";
import CancelDeleteCategoryAction from "../category/actions/CancelDeleteCategoryAction";
import DeleteCategoryClickAction from "../category/actions/DeleteCategoryClickAction";

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
                    newCategoryName={this.props.data.newCategoryName}
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
                        ok: () => {},
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
                    disabled={!this.props.data.selectedCategory}
                    onClick={() => {
                        console.log(this.props)
                    }}>
                    <i className="fas fa-info"/>
                </button>
                <button
                    disabled={!this.props.data.selectedCategory || !this.props.data.selectedCategory.editable}
                    onClick={() => {
                        console.log(this.props)
                    }}>
                    <i className="fas fa-pen"/>
                </button>
                <button
                    disabled={!this.props.data.selectedCategory || !this.props.data.selectedCategory.editable || !this.props.data.selectedCategory.empty}
                    onClick={() => new DeleteCategoryClickAction().apply()}>
                    <i className="fas fa-times"/>
                </button>
                <button
                    disabled={!this.props.data.selectedCategory || this.props.data.selectedCategory.hasBox === undefined || this.props.data.selectedCategory.hasBox === true}
                    onClick={() => {
                        console.log(this.props)
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


