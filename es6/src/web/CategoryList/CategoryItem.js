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
                hash: `#categories/${this.props.categoryId}`
            }).apply();
    }

    renderDictionayLookup() {
        if (this.props.givenLanguage && this.props.wantedLanguage) {
            return <td
                onClick={this.onClick}>{this.props.texts.categoryList.languages[this.props.givenLanguage][this.props.language]} <i className="fas fa-arrow-right"/> {this.props.texts.categoryList.languages[this.props.wantedLanguage][this.props.language]}</td>
        } else {
            return <td onClick={this.onClick}/>
        }
    }

    render() {
        return (
            <tr className="clickable">
                <td onClick={this.onClick}>{this.props.categoryName}</td>
                <td onClick={this.onClick}>{this.props.categoryAuthor}</td>
                {this.props.rootDictionaryLookup === true && this.renderDictionayLookup()}
                <td className="noBreak">
                    {this.props.editable === true &&
                    <button onClick={() => this.props.onEdit()}>
                        <i className="fas fa-pen"/>
                    </button>}
                    {this.props.editable === true &&
                    <button disabled={!this.props.empty}
                            onClick={() => this.props.onDeleteClick(this.props.categoryId)}>
                        <i className="fas fa-times"/>
                    </button>}
                    {this.props.isRoot === true && this.props.hasBox === false &&
                    <button onClick={() => this.props.onSubscribe()}>
                        <i className="fas fa-align-justify"/>
                    </button>}
                </td>
            </tr>
        );
    }
}

