import React from 'react';
import SelectableCategoryItem from "./SelectableCategoryItem";
import {expandTreeItem} from "../../../gen/category/ActionFunctions";

export default class CollapsedCategoryItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="collapsedCategoryItem">
                {this.props.empty === false &&
                <i className="fas fa-caret-right"
                   onClick={() => expandTreeItem(this.props.categoryId)}/>
                }
                {this.props.empty === true && <i className="fas fa-caret-right disabled"/>}
                <SelectableCategoryItem
                    selected={this.props.selected}
                    categoryName={this.props.categoryName}
                    categoryId={this.props.categoryId}
                    dropAllowed={this.props.dropAllowed}
                    dropTargetCategoryId={this.props.dropTargetCategoryId}
                    depth={this.props.depth}
                />
            </div>
        );
    }
}


