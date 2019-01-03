import AbstractScheduleNextCardCommand from "../../../gen/box/commands/AbstractScheduleNextCardCommand";
import {getAppState} from "../../app/App";

export default class ScheduleNextCardCommand extends AbstractScheduleNextCardCommand {

    initCommandData() {
        const appState = getAppState();
        this.commandData.boxId = appState.data === undefined || appState.data.boxId === undefined ? undefined : appState.data.boxId;
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
