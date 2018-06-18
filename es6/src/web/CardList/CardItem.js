import React from "react";

export default class CardItem extends React.Component {

    constructor(props) {
        super(props);
        this.renderGiven = this.renderGiven.bind(this);
        this.renderWanted = this.renderWanted.bind(this);
        this.renderImage = this.renderImage.bind(this);
    }

    renderGiven() {
        return (
            <td><pre>{this.props.given}</pre></td>
        );
    }

    renderWanted() {
        return (
            <td>
                <pre>{this.props.wanted}</pre>
            </td>
        );
    }

    renderImage() {
        return (
            <td>
                <img className="preview" src={this.props.image}/>
            </td>
        );
    }

    render() {
        return (
            <tr>
                <td>{this.props.cardIndex}</td>
                {this.props.naturalInputOrder === true && this.renderGiven()}
                {this.props.naturalInputOrder === true && this.renderWanted()}
                {this.props.naturalInputOrder === true && this.renderImage()}
                {this.props.naturalInputOrder === false && this.renderWanted()}
                {this.props.naturalInputOrder === false && this.renderImage()}
                {this.props.naturalInputOrder === false && this.renderGiven()}
                <td>{this.props.cardAuthor}</td>
                <td>
                    {this.props.userRole === "ADMIN" &&
                    <button onClick={() => this.props.onDeleteClick(this.props.cardId)}>{"\u2717"}</button>}
                    <button onClick={() => this.props.onEdit(this.props)}>{"\u270E"}</button>
                </td>
            </tr>
        );
    }
}

