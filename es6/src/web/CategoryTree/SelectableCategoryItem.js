import React from 'react';
import SelectTreeItemAction from "../../category/actions/SelectTreeItemAction";
import DeselectTreeItemAction from "../../category/actions/DeselectTreeItemAction";
import {checkDropAllowed, itemDropped} from "../../../gen/category/ActionFunctions";
import {moveCardsStarted} from "../../../gen/card/ActionFunctions";

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
        console.log();
        return (
            <span draggable={this.props.depth > 1}
                  onDragStart={() => console.log("drag")} onDragOver={this.allowDrop} onDrop={this.drop}>
                {!this.props.selected && <span className="item notSelected"
                                               onClick={() => new SelectTreeItemAction(this.props.categoryId).apply()}>{this.props.categoryName}</span>}
                {this.props.selected && <span className="item selected"
                                              onClick={() => new DeselectTreeItemAction().apply()}>{this.props.categoryName}</span>}
            </span>
        );
    }
}


