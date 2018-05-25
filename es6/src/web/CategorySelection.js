import React from "react";

export default class CategorySelection extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <input type="radio" name="category" value={this.props.categoryId} onChange={this.props.onCategorySelected} checked={this.props.checked}/> {this.props.categoryName}
            </div>
        );
    }
}

