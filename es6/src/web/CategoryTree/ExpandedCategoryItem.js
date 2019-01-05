import React from 'react';
import CollapseTreeItemAction from "../../category/actions/CollapseTreeItemAction";
import CategoryItem from "./CategoryItem";
import SelectableCategoryItem from "./SelectableCategoryItem";

export default class ExpandedCategoryItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let children = [];
        if (this.props.childCategories) {
            children = this.props.childCategories.map((category) => {
                return <CategoryItem
                    {...category}
                    childCategories={category.childCategories}
                    depth={this.props.depth}
                    selectedCategory={this.props.selectedCategory}
                    key={category.categoryId}
                    texts={this.props.texts}
                    language={this.props.language}
                    dropAllowed={this.props.dropAllowed}
                    dropTargetCategoryId={this.props.dropTargetCategoryId}
                />
            });
        }
        return (
            <div className="expandedCategoryItem">
                <i className="fas fa-caret-down"
                   onClick={() => new CollapseTreeItemAction(this.props.categoryId).apply()}/>
                <SelectableCategoryItem
                    selected={this.props.selected}
                    categoryName={this.props.categoryName}
                    categoryId={this.props.categoryId}
                    dropAllowed={this.props.dropAllowed}
                    dropTargetCategoryId={this.props.dropTargetCategoryId}
                    depth={this.props.depth}
                />
                <div>
                    {children}
                </div>
            </div>
        );
    }
}


