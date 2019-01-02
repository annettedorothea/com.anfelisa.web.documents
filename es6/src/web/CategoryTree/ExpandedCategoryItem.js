import React from 'react';
import CollapseTreeItemAction from "../../category/actions/CollapseTreeItemAction";
import CategoryItem from "./CategoryItem";

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
                    key={category.categoryId}
                    texts={this.props.texts}
                    language={this.props.language}
                />
            });
        }
        return (
            <div className="expandedCategoryItem">
                <i className="fas fa-caret-down"
                   onClick={() => new CollapseTreeItemAction(this.props.categoryId).apply()}/>
                {this.props.categoryName}
                <div>
                    {children}
                </div>
            </div>
        );
    }
}


