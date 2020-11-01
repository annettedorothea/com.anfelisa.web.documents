import React from 'react';
import CategoryItem from "./CategoryItem";
import SelectableCategoryItem from "./SelectableCategoryItem";
import {collapseTreeItem} from "../../../gen/category/ActionFunctions";

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
                {this.props.depth > 1 &&
                <i className="fas fa-caret-down"
                   onClick={() => collapseTreeItem(this.props.categoryId)}/>}
                <SelectableCategoryItem
                    selected={this.props.selected}
                    categoryName={this.props.categoryName}
                    nonScheduledCount={this.props.nonScheduledCount}
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


