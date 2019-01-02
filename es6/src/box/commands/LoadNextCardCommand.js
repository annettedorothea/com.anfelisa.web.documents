import AbstractLoadNextCardCommand from "../../../gen/box/commands/AbstractLoadNextCardCommand";
import * as App from "../../app/App";

export default class LoadNextCardCommand extends AbstractLoadNextCardCommand {

    initCommandData() {
    	//add from appState to commandData 
    }

    handleResponse(resolve) {
        this.commandData.index = 0;
        this.commandData.enableScoreButtons = false;
        this.commandData.displayImage = false;
        this.commandData.scheduleNext = App.appState.data === undefined || App.appState.data.scheduleNext === undefined ? false : App.appState.data.scheduleNext;
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

