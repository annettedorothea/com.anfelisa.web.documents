import AbstractToggleAllScheduleCardSelectionCommand from "../../../gen/card/commands/AbstractToggleAllScheduleCardSelectionCommand";
import {getAppState} from "../../app/App";

export default class ToggleAllScheduleCardSelectionCommand extends AbstractToggleAllScheduleCardSelectionCommand {
    execute() {
        let data = getAppState().data;
        let scheduleCardSelection = [];
        if (data.scheduleCardSelection.length < data.cardList.length) {
            data.cardList.forEach(card => {
                scheduleCardSelection.push(card.cardId)
            });
        }
        this.commandData.scheduleCardSelection = scheduleCardSelection;
    	this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
