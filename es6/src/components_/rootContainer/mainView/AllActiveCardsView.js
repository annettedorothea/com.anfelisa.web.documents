/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/


import React from "react";
import {
    scheduleSelectedCards,
    sortSelectedCardsOut,
    toggleAllScheduleCardSelection
} from "../../../../gen/box/ActionFunctions";
import {Texts} from "../../../app/Texts";
import {ActiveCardListItemComponent} from "../../../../gen/components/rootContainer/mainView/allActiveCardsView/ActiveCardListItemComponent";

export function uiElement(props) {

    if (!props.activeCardList || !props.selectedCardIds) {
        return null;
    }
    const cardItems = props.activeCardList.map((card, index) => {
        return <ActiveCardListItemComponent
            {...card}
            key={`card_${index}`}
            selectedCardIds={props.selectedCardIds}
            editable={props.editable}
            language={props.language}
        />
    });
    return <div className="allActiveCards">
        <table>
            <thead>
            <tr className="notPrinted">
                <th>
                    <input
                        type="checkbox"
                        onChange={toggleAllScheduleCardSelection}
                        checked={props.activeCardList.length > 0 && props.selectedCardIds.length === props.activeCardList.length}
                    />
                </th>
                <th colSpan={4}>
                    <button
                        onClick={scheduleSelectedCards}
                        disabled={props.selectedCardIds.length === 0}
                    >
                        {Texts.allActiveCards.scheduleSelectedCards[props.language]}
                    </button>
                    <button
                        onClick={sortSelectedCardsOut}
                        disabled={props.selectedCardIds.length === 0}
                    >
                        {Texts.allActiveCards.sortSelectedCardsOut[props.language]}
                    </button>
                </th>
            </tr>
            </thead>
            <tbody>
            {cardItems}
            </tbody>
        </table>
    </div>
}


/******* S.D.G. *******/


