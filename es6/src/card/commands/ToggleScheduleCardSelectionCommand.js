import AbstractToggleScheduleCardSelectionCommand from "../../../gen/card/commands/AbstractToggleScheduleCardSelectionCommand";
import {getAppState} from "../../app/App";

export default class ToggleScheduleCardSelectionCommand extends AbstractToggleScheduleCardSelectionCommand {
    execute() {
        let selectedCardIds = getAppState().data.selectedCardIds;
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
