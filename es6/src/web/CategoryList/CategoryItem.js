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
                onClick={this.onClick}>{this.props.texts.categoryList.languages[this.props.givenLanguage][this.props.language]} {"\u2192"} {this.props.texts.categoryList.languages[this.props.wantedLanguage][this.props.language]}</td>
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
                    {this.props.editable === true &&
                    <button disabled={!this.props.empty}
                            onClick={() => this.props.onDeleteClick(this.props.categoryId)}>{"\u2717"}</button>}
                    {this.props.editable === true &&
                    <button onClick={() => this.props.onEdit()}>{"\u270E"}</button>}
                    {this.props.isRoot === true && this.props.hasBox === false &&
                    <button onClick={() => this.props.onSubscribe()}>{this.props.texts.categoryList.subscribe[this.props.language]}</button>}
                </td>
            </tr>
        );
    }
}

