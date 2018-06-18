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

    renderDictionayLookup() {
        if (this.props.givenLanguage && this.props.wantedLanguage) {
            return <td
                onClick={this.onClick}>{this.props.texts.categoryList.languages[this.props.givenLanguage]} {"\u2192"} {this.props.texts.categoryList.languages[this.props.wantedLanguage]}</td>
        } else {
            return <td onClick={this.onClick}/>
        }
    }

    render() {
        return (
            <tr>
                <td onClick={this.onClick}>{this.props.categoryIndex}</td>
                <td onClick={this.onClick}>{this.props.categoryName}</td>
                <td onClick={this.onClick}>{this.props.categoryAuthor}</td>
                {this.props.rootDictionaryLookup === true && this.renderDictionayLookup()}
                <td>
                    {this.props.userRole === "ADMIN" &&
                    <button disabled={!this.props.empty}
                            onClick={() => this.props.onDeleteClick(this.props.categoryId)}>{"\u2717"}</button>}
                    {(this.props.userRole === "ADMIN" || this.props.userRole === "AUTHOR") &&
                    <button onClick={() => this.props.onEdit(this.props)}>{"\u270E"}</button>}
                </td>
            </tr>
        );
    }
}

