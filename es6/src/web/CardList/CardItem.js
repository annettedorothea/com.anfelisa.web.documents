import React from "react";
import {
    deleteCardClick,
    editCard,
    moveCardsStarted,
    toggleScheduleCardSelection
} from "../../../gen/card/ActionFunctions";

export default class CardItem extends React.Component {

    constructor(props) {
        super(props);
    }

    renderGiven() {
        return (
            <td onDoubleClick={this.props.editable === true ? () => editCard(this.props.cardId) : () => {
            }}>
                <pre>{this.props.given}</pre>
            </td>
        );
    }

    renderWanted() {
        return (
            <td onDoubleClick={this.props.editable === true ? () => editCard(this.props.cardId) : () => {
            }}>
                <pre>{this.props.wanted}</pre>
            </td>
        );
    }

    renderImage() {
        return (
            <td
                className="preview"
                onDoubleClick={
                    this.props.editable === true ? () => editCard(this.props.cardId) : () => {
                    }
                }
            >
                <img src={this.props.image}/>
            </td>
        );
    }

    render() {
        return (
            <tr>
                <td className="notPrinted">
                    <input
                        type={"checkbox"}
                        onChange={() => toggleScheduleCardSelection(this.props.cardId)}
                        checked={this.props.selectedCardIds.indexOf(this.props.cardId) >= 0}
                    />
                </td>
                {this.props.naturalInputOrder === true && this.renderGiven()}
                {this.props.naturalInputOrder === true && this.renderWanted()}
                {this.props.naturalInputOrder === true && this.renderImage()}
                {this.props.naturalInputOrder === false && this.renderWanted()}
                {this.props.naturalInputOrder === false && this.renderGiven()}
                {this.props.naturalInputOrder === false && this.renderImage()}
                <td className="noBreak notPrinted">
                    {this.props.editable === true &&
                    <button onClick={() => editCard(this.props.cardId)}>
                        <i className="fas fa-pen"/>
                    </button>}
                    {this.props.editable === true &&
                    <button onClick={() => deleteCardClick(this.props.cardId)}>
                        <i className="fas fa-times"/>
                    </button>}
                    {this.props.editable === true && this.props.selectedCardIds.indexOf(this.props.cardId) >= 0 &&
                    <i id={this.props.cardId} className="fas fa-align-justify" draggable="true"
                       onDragStart={() => moveCardsStarted()}/>
                    }
                </td>
            </tr>
        );
    }
}

