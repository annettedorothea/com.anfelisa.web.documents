import React from 'react';
import ExpandedCategoryItem from "./ExpandedCategoryItem";

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
                    depth={1}
                    dropAllowed={this.props.dropAllowed}
                    dropTargetCategoryId={this.props.dropTargetCategoryId}
                    texts={this.props.texts}
                    language={this.props.language}
                />
            </div>
        );
    }
}


