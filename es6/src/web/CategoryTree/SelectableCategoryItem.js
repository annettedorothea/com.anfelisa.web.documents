import React from 'react';
import {
    checkDropAllowed,
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
        }
    }

    onDragOver(event) {
        if (!!this.props.dropAllowed) {
            event.preventDefault();
        }
    }

    onDragEnter(event) {
        checkDropAllowed(this.props.categoryId, event.altKey);
    }

    render() {
        return (
            <span draggable={true}
                  onDragStart={(event) => this.onDragStart(event)}
                  onDragEnter={(event) => this.onDragEnter(event)}
                  onDragOver={this.onDragOver}
                  onDrop={this.drop}
            >
                <span
                    className={`item ${this.props.selected ? "selected" : "notSelected"} ${this.props.dropAllowed && this.props.dropTargetCategoryId === this.props.categoryId ? "dropAllowed" : ""}`}
                    onClick={() => this.props.selected ? "" : selectTreeItem(this.props.categoryId)}>{this.props.categoryName}
                    {this.props.nonScheduledCount === 1 && <span
                        className="nonScheduledCount">{this.props.texts.categoryList.nonScheduledSingular[this.props.language]}</span>}
                    {this.props.nonScheduledCount > 1 && <span
                        className="nonScheduledCount">{this.props.texts.categoryList.nonScheduled[this.props.language].replace("{0}", this.props.nonScheduledCount)}</span>}
                </span>
            </span>
        );
    }
}


