import AbstractLoadNextCardCommand from "../../../gen/box/commands/AbstractLoadNextCardCommand";
import {getAppState} from "../../app/App";

export default class LoadNextCardCommand extends AbstractLoadNextCardCommand {

    initCommandData() {
        return true;
    }

    handleResponse(resolve) {
        const appState = getAppState();
        this.commandData.index = 0;
        this.commandData.enableScoreButtons = false;
        this.commandData.displayImage = false;
        this.commandData.scheduleNext = appState.data === undefined || appState.data.scheduleNext === undefined ? false : appState.data.scheduleNext;
        if (this.commandData.scheduledCardId) {
            this.commandData.outcome = this.ok;
        } else {
            if (this.commandData.scheduleNext === true) {
                this.commandData.outcome = this.scheduleNext;
            } else {
                this.commandData.outcome = this.doNotScheduleNext;
            }
        }
        resolve();
    }

    handleError(resolve, reject) {
        reject(this.commandData.error);
    }
}

/*       S.D.G.       */

