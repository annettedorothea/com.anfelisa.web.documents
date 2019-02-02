import AbstractLoadNextCardCommand from "../../../gen/box/commands/AbstractLoadNextCardCommand";
import {getState} from "../../../gen/ace/AppState";

export default class LoadNextCardCommand extends AbstractLoadNextCardCommand {

    initCommandData() {
        return true;
    }

    handleResponse(resolve) {
        const appState = getState();
        this.commandData.view = "card";
        this.commandData.data = {};
        this.commandData.index = 0;
        this.commandData.enableScoreButtons = false;
        this.commandData.displayImage = false;
        this.commandData.editMaxInterval = false;
        this.commandData.editMaxCardsPerDay = false;
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

