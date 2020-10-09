import React from "react";
import {updateCardPriority} from "../../../gen/card/ActionFunctions";

export default class Priority extends React.Component {

    render() {
        if (this.props.priority === 1) {
            return (
                <td className="priority">
                    <i className="fa fa-star" onClick={() => updateCardPriority(this.props.cardId, 1)}/>
                    <i className="far fa-star" onClick={() => updateCardPriority(this.props.cardId, 2)}/>
                    <i className="far fa-star" onClick={() => updateCardPriority(this.props.cardId, 3)}/>
                </td>
            );
        } else if (this.props.priority === 2) {
            return (
                <td className="priority">
                    <i className="fa fa-star" onClick={() => updateCardPriority(this.props.cardId, 1)}/>
                    <i className="fa fa-star" onClick={() => updateCardPriority(this.props.cardId, 2)}/>
                    <i className="far fa-star" onClick={() => updateCardPriority(this.props.cardId, 3)}/>
                </td>
            );
        } else if (this.props.priority === 3) {
            return (
                <td className="priority">
                    <i className="fa fa-star" onClick={() => updateCardPriority(this.props.cardId, 1)}/>
                    <i className="fa fa-star" onClick={() => updateCardPriority(this.props.cardId, 2)}/>
                    <i className="fa fa-star" onClick={() => updateCardPriority(this.props.cardId, 3)}/>
                </td>
            );
        } else {
            return (
                <td className="priority">
                    <i className="far fa-star" onClick={() => updateCardPriority(this.props.cardId, 1)}/>
                    <i className="far fa-star" onClick={() => updateCardPriority(this.props.cardId, 2)}/>
                    <i className="far fa-star" onClick={() => updateCardPriority(this.props.cardId, 3)}/>
                </td>
            );
        }
    }
}

