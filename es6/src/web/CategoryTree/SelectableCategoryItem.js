import React from 'react';
import SelectTreeItemAction from "../../category/actions/SelectTreeItemAction";
import DeselectTreeItemAction from "../../category/actions/DeselectTreeItemAction";

export default class SelectableCategoryItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <span>
                {!this.props.selected && <span className="item notSelected"
                                               onClick={() => new SelectTreeItemAction(this.props.categoryId).apply()}>{this.props.categoryName}</span>}
                {this.props.selected && <span className="item selected"
                                              onClick={() => new DeselectTreeItemAction().apply()}>{this.props.categoryName}</span>}
            </span>
        );
    }
}


