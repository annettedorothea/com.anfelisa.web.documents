import React from "react";
import {toggleScheduleCardSelection, updateCardPriority} from "../../../gen/box/ActionFunctions";
import Priority from "../CardList/Priority";

export default class ActiveCardItem extends React.Component {

    constructor(props) {
        super(props);
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
                <td
                    className={"visibleMobile"}>
                    <pre>{this.props.given}</pre>
                </td>
                <td
                    className={"visibleMobile"}>
                    <pre>{this.props.wanted}</pre>
                </td>
                <Priority priority={this.props.priority} cardId={this.props.cardId}
                          updateFunction={updateCardPriority}/>
                <td className="visibleMobile alignRight">
                    {this.props.next ? new Date(this.props.next).toLocaleDateString() : ""}
                </td>
                <td className={`visibleMobile thumbsUp quality_${this.props.lastQuality}`}>
                    {this.props.ef > 2.5 && <div><i className="far fa-thumbs-up"/><i className="far fa-thumbs-up"/><i
                        className="far fa-thumbs-up"/></div>}
                    {this.props.ef > 2.0 && this.props.ef <= 2.5 &&
                    <div><i className="far fa-thumbs-up"/><i className="far fa-thumbs-up"/></div>}
                    {this.props.ef < 2.0 && <div><i className="far fa-thumbs-up"/></div>}
                </td>
                <td className="visibleMobile alignRight">
                    {this.props.texts.allActiveCards.count[this.props.language].replace("{0}", this.props.count)}
                </td>
                <td className="visibleMobile alignRight">
                    {this.props.texts.allActiveCards.interval[this.props.language].replace("{0}", this.props.interval)}
                </td>
            </tr>
        );
    }
}

