import AbstractToggleScheduleCardSelectionCommand from "../../../gen/card/commands/AbstractToggleScheduleCardSelectionCommand";
import {getState} from "../../../gen/ace/ReadAppState";

export default class ToggleScheduleCardSelectionCommand extends AbstractToggleScheduleCardSelectionCommand {
    execute() {
        const data = getState().data.cardView;
        let selectedCardIds = data.selectedCardIds;
        const index = selectedCardIds.indexOf(this.commandData.cardId);
        if (index !== -1) {
            selectedCardIds.splice(index, 1);
        } else {
            selectedCardIds.push(this.commandData.cardId);
        }
        this.commandData.selectedCardIds = selectedCardIds;
    	this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
