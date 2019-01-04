import AbstractLoadBoxStatisticsCommand from "../../../gen/box/commands/AbstractLoadBoxStatisticsCommand";
import {getAppState} from "../../app/App";

export default class LoadBoxStatisticsCommand extends AbstractLoadBoxStatisticsCommand {

    initCommandData() {
        return true;
    }
    handleResponse(resolve) {
        const appState = getAppState();
        const scheduleNext = appState.data === undefined || appState.data.scheduleNext === undefined ? false : appState.data.scheduleNext;
        this.commandData.scheduleNext = scheduleNext === true && this.commandData.myCards === this.commandData.totalCards ? false : this.commandData.scheduleNext;
        this.commandData.editMaxInterval = false;
        this.commandData.outcome = this.ok;
    	resolve();
    }
    handleError(resolve, reject) {
    	reject(this.commandData.error);
    }
}

/*       S.D.G.       */
