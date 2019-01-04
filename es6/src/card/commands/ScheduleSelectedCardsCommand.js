import AbstractScheduleSelectedCardsCommand from "../../../gen/card/commands/AbstractScheduleSelectedCardsCommand";
import {getAppState} from "../../app/App";

export default class ScheduleSelectedCardsCommand extends AbstractScheduleSelectedCardsCommand {

    initCommandData() {
        this.commandData.cardIds = getAppState().data.scheduleCardSelection;
        return true;
    }

    handleResponse(resolve, reject) {
    	this.commandData.outcome = this.ok;
    	resolve();
    }
    handleError(resolve, reject) {
    	reject(this.commandData.error);
    }
}

/*       S.D.G.       */
