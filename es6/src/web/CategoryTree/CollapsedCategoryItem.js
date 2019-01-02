import React from 'react';
import ExpandTreeItemAction from "../../category/actions/ExpandTreeItemAction";

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
                {this.props.categoryName}
            </div>
        );
    }
}


