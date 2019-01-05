import React from "react";
import ToggleScheduleCardSelectionAction from "../../card/actions/ToggleScheduleCardSelectionAction";
import EditCardAction from "../../card/actions/EditCardAction";
import DeleteCardClickAction from "../../card/actions/DeleteCardClickAction";
import DeleteCardAction from "../../card/actions/DeleteCardAction";
import CancelDeleteCardAction from "../../card/actions/CancelDeleteCardAction";
import {moveCardsStarted} from "../../../gen/card/ActionFunctions";

export default class CardItem extends React.Component {

    constructor(props) {
        super(props);
        this.toggleScheduleCardSelection = this.toggleScheduleCardSelection.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onDeleteClick = this.onDeleteClick.bind(this);
    }

    onEdit() {
        new EditCardAction(this.props.cardId).apply();
    }

    toggleScheduleCardSelection() {
        new ToggleScheduleCardSelectionAction(this.props.cardId).apply();
    }

    onDeleteClick() {
        new DeleteCardClickAction(this.props.cardId).apply();
    }

    renderGiven() {
        return (
            <td onDoubleClick={this.props.editable === true ? () => this.onEdit() : () => {
            }}>
                <pre>{this.props.given}</pre>
            </td>
        );
    }

    renderWanted() {
        return (
            <td onDoubleClick={this.props.editable === true ? () => this.onEdit() : () => {
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
                    this.props.editable === true ? () => this.onEdit() : () => {
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
                <td>
                    <input
                        type={"checkbox"}
                        onChange={() => this.toggleScheduleCardSelection()}
                        checked={this.props.selectedCardIds.indexOf(this.props.cardId) >= 0}
                    />
                </td>
                {this.props.naturalInputOrder === true && this.renderGiven()}
                {this.props.naturalInputOrder === true && this.renderWanted()}
                {this.props.naturalInputOrder === true && this.renderImage()}
                {this.props.naturalInputOrder === false && this.renderWanted()}
                {this.props.naturalInputOrder === false && this.renderGiven()}
                {this.props.naturalInputOrder === false && this.renderImage()}
                <td className="noBreak">
                    {this.props.editable === true &&
                    <button onClick={() => this.onEdit()}>
                        <i className="fas fa-pen"/>
                    </button>}
                    {this.props.editable === true &&
                    <button onClick={() => this.onDeleteClick()}>
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

