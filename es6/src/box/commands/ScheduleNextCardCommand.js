import AbstractScheduleNextCardCommand from "../../../gen/box/commands/AbstractScheduleNextCardCommand";
import {getState} from "../../../gen/ace/ReadAppState";

export default class ScheduleNextCardCommand extends AbstractScheduleNextCardCommand {

    initCommandData() {
        const appState = getState();
        this.commandData.boxId = appState.data === undefined || appState.data.boxId === undefined ? undefined : appState.data.boxId;
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
