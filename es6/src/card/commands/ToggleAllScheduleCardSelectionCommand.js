import AbstractToggleAllScheduleCardSelectionCommand from "../../../gen/card/commands/AbstractToggleAllScheduleCardSelectionCommand";
import {getState} from "../../../gen/ace/ReadAppState";

export default class ToggleAllScheduleCardSelectionCommand extends AbstractToggleAllScheduleCardSelectionCommand {
    execute() {
        const data = getState().data.cardView;
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
