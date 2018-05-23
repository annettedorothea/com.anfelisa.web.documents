import React from "react";
import RouteAction from "../../common/actions/RouteAction";

export default class CategoryItem extends React.Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        new RouteAction(
            {
                username: this.props.username,
                password: this.props.password,
                hash: `#categories/${this.props.categoryId}`
            }).apply();
    }

    render() {
        return (
            <tr>
                <td onClick={this.onClick}>{this.props.categoryIndex}</td>
                <td onClick={this.onClick}>{this.props.categoryName}</td>
                <td onClick={this.onClick}>{this.props.categoryAuthor}</td>
                <td onClick={this.onClick}>{this.props.texts.categoryList.languages[this.props.givenLanguage]}</td>
                <td onClick={this.onClick}>{this.props.texts.categoryList.languages[this.props.wantedLanguage]}</td>
                <td>
                    {this.props.userRole === "ADMIN" &&
                    <button disabled={!this.props.empty} onClick={() => this.props.onDeleteClick(this.props.categoryId)}>{"\u2717"}</button>}
                    <button onClick={() => this.props.onEdit(this.props)}>{"\u270E"}</button>
                </td>
            </tr>
        );
    }
}

