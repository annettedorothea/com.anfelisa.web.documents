import React from "react";
import ToggleScheduleCardSelectionAction from "../../author/actions/ToggleScheduleCardSelectionAction";

export default class CardItem extends React.Component {

    constructor(props) {
        super(props);
        this.toggleScheduleCardSelection = this.toggleScheduleCardSelection.bind(this);
        this.drag = this.drag.bind(this);
        this.drop = this.drop.bind(this);
        this.allowDrop = this.allowDrop.bind(this);
    }

    drag(event) {
        if (this.props.scheduleCardSelection.length === 0) {
            event.dataTransfer.setData("cards", [event.target.id]);
        } else {
            event.dataTransfer.setData("cards", [this.props.scheduleCardSelection]);
        }
    }

    drop(event, element) {
        event.preventDefault();
        const data = event.dataTransfer.getData("cards");
        console.log("drop data", data);
        console.log("drop target", event.target);
        console.log("drop element", element.props.cardId);
    }

    allowDrop(event) {
        event.preventDefault();
    }

    toggleScheduleCardSelection(cardId) {
        new ToggleScheduleCardSelectionAction({cardId}).apply();
    }

    renderGiven() {
        return (
            <td onDoubleClick={this.props.editable === true ? () => this.props.onEdit() : () => {
            }}>
                <pre>{this.props.given}</pre>
            </td>
        );
    }

    renderWanted() {
        return (
            <td onDoubleClick={this.props.editable === true ? () => this.props.onEdit() : () => {
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
                    this.props.editable === true ? () => this.props.onEdit() : () => {
                    }
                }
            >
                <img src={this.props.image}/>
            </td>
        );
    }

    render() {
        return (
            <tr onDrop={(event) => this.drop(event, this)} onDragOver={(event) => this.allowDrop(event)}>
                {this.props.hasBox === true &&
                <td>
                    <input
                        type={"checkbox"}
                        onChange={() => this.toggleScheduleCardSelection(this.props.cardId)}
                        checked={this.props.scheduleCardSelection.indexOf(this.props.cardId) >= 0}
                    />
                </td>
                }
                {this.props.naturalInputOrder === true && this.renderGiven()}
                {this.props.naturalInputOrder === true && this.renderWanted()}
                {this.props.naturalInputOrder === true && this.renderImage()}
                {this.props.naturalInputOrder === false && this.renderWanted()}
                {this.props.naturalInputOrder === false && this.renderGiven()}
                {this.props.naturalInputOrder === false && this.renderImage()}
                <td>{this.props.cardAuthor}</td>
                <td className="noBreak">
                    {this.props.editable === true &&
                    <button onClick={() => this.props.onEdit()}>
                        <i className="fas fa-pen"/>
                    </button>}
                    {this.props.editable === true &&
                    <button onClick={() => this.props.onDeleteClick(this.props.cardId)}>
                        <i className="fas fa-times"/>
                    </button>}
                    {this.props.editable === true && (this.props.scheduleCardSelection.length === 0 || this.props.scheduleCardSelection.indexOf(this.props.cardId) >= 0) &&
                        <i id={this.props.cardId} className="fas fa-align-justify" draggable="true" onDragStart={(event) => this.drag(event)}/>
                    }
                </td>
                {this.props.hasBox === false && this.props.editable === true && <td/>}
            </tr>
        );
    }
}

