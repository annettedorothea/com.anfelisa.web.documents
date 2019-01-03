import React from 'react';
import ExpandedCategoryItem from "./ExpandedCategoryItem";
import CollapsedCategoryItem from "./CollapsedCategoryItem";

export default class CategoryItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const expanded = this.props.expanded === true;
        const selected = this.props.selectedCategory && this.props.selectedCategory.categoryId === this.props.categoryId;
        return (
            <div className={`categoryItem depth_${this.props.depth}`}>
                {expanded &&
                <ExpandedCategoryItem
                    {...this.props}
                    selected={selected}
                    selectedCategory={this.props.selectedCategory}
                    depth={this.props.depth + 1}
                />}
                {!expanded &&
                <CollapsedCategoryItem
                    {...this.props}
                    selected={selected}
                />}
            </div>
        );
    }
}


