import AbstractToggleAllScheduleCardSelectionCommand from "../../../gen/card/commands/AbstractToggleAllScheduleCardSelectionCommand";
import {getAppState} from "../../app/App";

export default class ToggleAllScheduleCardSelectionCommand extends AbstractToggleAllScheduleCardSelectionCommand {
    execute() {
        let data = getAppState().data;
        let selectedCardIds = [];
        if (data.selectedCardIds.length < data.cardList.length) {
            data.cardList.forEach(card => {
                selectedCardIds.push(card.cardId)
            });
        }
        this.commandData.selectedCardIds = selectedCardIds;
    	this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
