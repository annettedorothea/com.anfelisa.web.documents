import React from 'react';
import {
    checkDropAllowed,
    deselectTreeItem,
    itemDropped,
    moveCategoryStarted,
    selectTreeItem
} from "../../../gen/category/ActionFunctions";

export default class SelectableCategoryItem extends React.Component {

    constructor(props) {
        super(props);
        this.drop = this.drop.bind(this);
        this.allowDrop = this.allowDrop.bind(this);
    }

    drop(event, element) {
        event.preventDefault();
        itemDropped();
    }

    allowDrop(event) {
        if (this.props.dropTargetCategoryId !== this.props.categoryId) {
            checkDropAllowed(this.props.categoryId);
        }
        if (!!this.props.dropAllowed) {
            event.preventDefault();
        }
    }

    render() {
        return (
            <span draggable={this.props.depth > 1}
                  onDragStart={() => moveCategoryStarted(this.props.categoryId)} onDragOver={this.allowDrop}
                  onDrop={this.drop}>
                {!this.props.selected && <span className="item notSelected"
                                               onClick={() => selectTreeItem(this.props.categoryId)}>{this.props.categoryName}</span>}
                {this.props.selected && <span className="item selected"
                                              onClick={() => deselectTreeItem()}>{this.props.categoryName}</span>}
            </span>
        );
    }
}


