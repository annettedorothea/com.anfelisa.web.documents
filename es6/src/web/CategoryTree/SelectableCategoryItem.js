import React from 'react';
import {
    checkDropAllowed,
    deselectTreeItem,
    itemDropped,
    moveCategoryStarted,
    selectTreeItem,
    changeOrderCategory
} from "../../../gen/category/ActionFunctions";

export default class SelectableCategoryItem extends React.Component {

    constructor(props) {
        super(props);
        this.drop = this.drop.bind(this);
        this.onDragOver = this.onDragOver.bind(this);
        this.onDragStart = this.onDragStart.bind(this);
        this.onDragEnter = this.onDragEnter.bind(this);
    }

    onDragStart(event) {
        event.dataTransfer.setData('Text', this.props.categoryName);
        moveCategoryStarted(this.props.categoryId)
    }

    drop(event) {
        event.preventDefault();
        if (event.altKey === false) {
            itemDropped();
        } else {
            changeOrderCategory();
            console.log("change order");
        }
    }

    onDragOver(event) {
        if (!!this.props.dropAllowed) {
            event.preventDefault();
        }
    }

    onDragEnter(event) {
        checkDropAllowed(this.props.categoryId, event.altKey, this.props.depth);
    }

    render() {
        return (
            <span draggable={true}
                  onDragStart={(event) => this.onDragStart(event)}
                  onDragEnter={(event) => this.onDragEnter(event)}
                  onDragOver={this.onDragOver}
                  onDrop={this.drop}
            >
                {!this.props.selected && <span className={`item notSelected ${this.props.dropAllowed && this.props.dropTargetCategoryId === this.props.categoryId ? "dropAllowed" : ""}`}
                                               onClick={() => selectTreeItem(this.props.categoryId)}>{this.props.categoryName}</span>}
                {this.props.selected && <span className={`item selected ${this.props.dropAllowed && this.props.dropTargetCategoryId === this.props.categoryId ? "dropAllowed" : ""}`}
                                              onClick={() => deselectTreeItem()}>{this.props.categoryName}</span>}
            </span>
        );
    }
}


