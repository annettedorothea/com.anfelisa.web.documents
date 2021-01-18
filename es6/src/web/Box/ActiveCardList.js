import React from 'react';
import {
    scheduleSelectedCards,
    sortSelectedCardsOut,
    toggleAllScheduleCardSelection
} from "../../../gen/box/ActionFunctions";
import ActiveCardItem from "./ActiveCardItem";

export default class ActiveCardList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (!this.props.cardList) {
            return <div/>;
        }
        const cardItems = this.props.cardList.map((card, index) => {
            return <ActiveCardItem
                {...card}
                key={index}
                selectedCardIds={this.props.selectedCardIds}
                editable={this.props.editable}
                texts={this.props.texts}
                language={this.props.language}
                username={this.props.username}
                password={this.props.password}
                userRole={this.props.role}
            />
        });
        return (
            <div className="allActiveCards">
                <table className="cardTable">
                    <thead>
                    <tr className="notPrinted">
                        <th>
                            <input
                                type={"checkbox"}
                                onChange={() => toggleAllScheduleCardSelection()}
                                checked={this.props.cardList.length > 0 && this.props.selectedCardIds.length === this.props.cardList.length}
                            />
                        </th>
                        <th colSpan={4}>
                            <button onClick={() => scheduleSelectedCards()}
                                    disabled={this.props.selectedCardIds.length === 0}>{this.props.texts.allActiveCards.scheduleSelectedCards[this.props.language]}
                            </button>
                            <button onClick={() => sortSelectedCardsOut()}
                                    disabled={this.props.selectedCardIds.length === 0}>{this.props.texts.allActiveCards.sortSelectedCardsOut[this.props.language]}
                            </button>
                        </th>
                    </tr>

                    </thead>

                    <tbody>
                    {cardItems}
                    </tbody>
                </table>

            </div>
        );
    }
}


