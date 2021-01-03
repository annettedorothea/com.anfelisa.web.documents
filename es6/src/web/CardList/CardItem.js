import React from "react";
import {
    deleteCardClick,
    editCard,
    moveCardsStarted,
    toggleScheduleCardSelection,
    changeCardOrder,
    onDragEnter,
    onDragExit, updateCardPriority
} from "../../../gen/card/ActionFunctions";
import Priority from "./Priority";

export default class CardItem extends React.Component {

    constructor(props) {
        super(props);
        this.drop = this.drop.bind(this);
        this.onDragOver = this.onDragOver.bind(this);
        this.onDragStart = this.onDragStart.bind(this);
        this.onDragExit = this.onDragExit.bind(this);
    }

    onDragStart(event) {
        event.dataTransfer.setData("Text", this.props.given);
        moveCardsStarted();
    }

    drop(event) {
        event.preventDefault();
        onDragExit(this.props.cardId);
        changeCardOrder(this.props.cardId);
    }

    onDragOver(event) {
        event.preventDefault();
        if (this.props.cardId !== this.props.dragTargetCardId) {
            onDragEnter(this.props.cardId);
        }
    }

    onDragExit() {
        onDragExit(this.props.cardId);
    }

    renderGiven(first) {
        return (
            <td
                onDoubleClick={() => editCard(this.props.cardId)}
                className={first ? "visibleMobile" : "notVisibleMobile"}>
                <pre>{this.props.given}</pre>
            </td>
        );
    }

    renderWanted(first) {
        return (
            <td
                onDoubleClick={() => editCard(this.props.cardId)}
                className={first ? "visibleMobile" : "notVisibleMobile"}>
                <pre>{this.props.wanted}</pre>
            </td>
        );
    }

    renderImage() {
        return (
            <td
                className="preview notVisibleMobile"
                onDoubleClick={() => editCard(this.props.cardId)}
            >
                <img src={this.props.image} alt=""/>
            </td>
        );
    }

    render() {
        return (
            <tr onDragOver={this.onDragOver}
                onDrop={this.drop}
                onDragLeave={this.onDragExit}
                className={this.props.cardId === this.props.dragTargetCardId ? "dragTarget" : ""}
            >
                <td className="notPrinted">
                    <input
                        type={"checkbox"}
                        onChange={() => toggleScheduleCardSelection(this.props.cardId)}
                        checked={this.props.selectedCardIds.indexOf(this.props.cardId) >= 0}
                    />
                </td>
                {this.props.naturalInputOrder === true && this.renderGiven(true)}
                {this.props.naturalInputOrder === true && this.renderWanted(false)}
                {this.props.naturalInputOrder === true && this.renderImage()}
                {this.props.naturalInputOrder === false && this.renderWanted(true)}
                {this.props.naturalInputOrder === false && this.renderGiven(false)}
                {this.props.naturalInputOrder === false && this.renderImage()}
                <Priority priority={this.props.priority} cardId={this.props.cardId} updateFunction={updateCardPriority}/>
                <td className="noBreak notPrinted">
                    <button onClick={() => editCard(this.props.cardId)}>
                        <i className="fas fa-pen"/>
                    </button>
                    <button onClick={() => deleteCardClick(this.props.cardId)}>
                        <i className="fas fa-times"/>
                    </button>
                    {this.props.selectedCardIds.indexOf(this.props.cardId) >= 0 &&
                    <i id={this.props.cardId} className="fas fa-align-justify" draggable="true"
                       onDragStart={(event) => this.onDragStart(event)}/>
                    }
                </td>
                <td className="notPrinted alignRight">
                    {this.props.next ? new Date(this.props.next).toLocaleDateString() : ""}
                </td>
            </tr>
        );
    }
}

