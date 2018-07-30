import React from "react";
import ToggleScheduleCardSelectionAction from "../../author/actions/ToggleScheduleCardSelectionAction";

export default class CardItem extends React.Component {

    constructor(props) {
        super(props);
        this.toggleScheduleCardSelection = this.toggleScheduleCardSelection.bind(this);
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
            <tr>
                {this.props.hasBox &&
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
                {this.props.naturalInputOrder === false && this.renderImage()}
                {this.props.naturalInputOrder === false && this.renderGiven()}
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
                </td>
            </tr>
        );
    }
}

