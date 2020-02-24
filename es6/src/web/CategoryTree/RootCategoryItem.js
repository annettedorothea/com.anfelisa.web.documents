import React from 'react';
import ExpandedCategoryItem from "./ExpandedCategoryItem";
import CollapsedCategoryItem from "./CollapsedCategoryItem";

export default class RootCategoryItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const selected = this.props.selectedCategory && this.props.selectedCategory.categoryId === this.props.categoryId;
        return (
            <div className={`categoryItem depth_1`}>
                <ExpandedCategoryItem
                    {...this.props}
                    selected={selected}
                    selectedCategory={this.props.selectedCategory}
                    depth={2}
                    dropAllowed={this.props.dropAllowed}
                    dropTargetCategoryId={this.props.dropTargetCategoryId}
                />
            </div>
        );
    }
}


