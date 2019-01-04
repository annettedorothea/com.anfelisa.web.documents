import AbstractToggleScheduleCardSelectionCommand from "../../../gen/card/commands/AbstractToggleScheduleCardSelectionCommand";
import {getAppState} from "../../app/App";

export default class ToggleScheduleCardSelectionCommand extends AbstractToggleScheduleCardSelectionCommand {
    execute() {
        let scheduleCardSelection = getAppState().data.scheduleCardSelection;
        const index = scheduleCardSelection.indexOf(this.commandData.cardId);
        if (index !== -1) {
            scheduleCardSelection.splice(index, 1);
        } else {
            scheduleCardSelection.push(this.commandData.cardId);
        }
        this.commandData.scheduleCardSelection = scheduleCardSelection;
    	this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
