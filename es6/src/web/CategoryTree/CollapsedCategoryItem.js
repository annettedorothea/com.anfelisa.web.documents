import React from 'react';
import ExpandTreeItemAction from "../../category/actions/ExpandTreeItemAction";
import SelectableCategoryItem from "./SelectableCategoryItem";

export default class CollapsedCategoryItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="collapsedCategoryItem">
                {this.props.empty === false &&
                <i className="fas fa-caret-right"
                   onClick={() => new ExpandTreeItemAction(this.props.categoryId).apply()}/>
                }
                {this.props.empty === true && <i className="fas"/>}
                <SelectableCategoryItem
                    selected={this.props.selected}
                    categoryName={this.props.categoryName}
                    categoryId={this.props.categoryId}
                />
            </div>
        );
    }
}


