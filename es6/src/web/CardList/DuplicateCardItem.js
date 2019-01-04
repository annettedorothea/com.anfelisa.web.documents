import React from "react";

export default class DuplicateCardItem extends React.Component {

    constructor(props) {
        super(props);
    }

    renderGiven() {
        return (
            <td>
                <pre>{this.props.given}</pre>
            </td>
        );
    }

    renderWanted() {
        return (
            <td>
                <pre>{this.props.wanted}</pre>
            </td>
        );
    }

    renderPath() {
        if (this.props.categoryId === this.props.parentCategoryId) {
            return <td>{this.props.path}</td>
        }
        return <td><a href={`#categories/${this.props.categoryId}`}>{this.props.path}</a></td>
    }

    renderImage() {
        if (this.props.image.length > 0) {
            return (
                <td className="preview">
                    <img src={this.props.image}/>
                </td>
            )
        }
        return (
            <td>
            </td>
        )
    }

    render() {
        return (
            <tr>
                {this.props.hasBox === true && <td/>}
                {this.props.naturalInputOrder === true && this.renderGiven()}
                {this.props.naturalInputOrder === true && this.renderWanted()}
                {this.props.naturalInputOrder === true && this.renderImage()}
                {this.props.naturalInputOrder === false && this.renderWanted()}
                {this.props.naturalInputOrder === false && this.renderGiven()}
                {this.props.naturalInputOrder === false && this.renderImage()}
                {this.renderPath()}
                {this.props.hasBox === false && <td/>}
            </tr>
        );
    }
}
