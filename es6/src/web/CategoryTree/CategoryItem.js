import React from 'react';
import ExpandedCategoryItem from "./ExpandedCategoryItem";
import CollapsedCategoryItem from "./CollapsedCategoryItem";

export default class CategoryItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={`categoryItem depth_${this.props.depth}`}>
                {this.props.expanded === true && <ExpandedCategoryItem {...this.props} depth={this.props.depth+1}/>}
                {this.props.expanded === false && <CollapsedCategoryItem {...this.props}/>}
            </div>
        );
    }
}


