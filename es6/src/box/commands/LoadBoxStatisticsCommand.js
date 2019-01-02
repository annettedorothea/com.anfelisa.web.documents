import AbstractLoadBoxStatisticsCommand from "../../../gen/box/commands/AbstractLoadBoxStatisticsCommand";
import * as App from "../../app/App";

export default class LoadBoxStatisticsCommand extends AbstractLoadBoxStatisticsCommand {

    handleResponse(resolve, reject) {
        const scheduleNext = App.appState.data === undefined || App.appState.data.scheduleNext === undefined ? false : App.appState.data.scheduleNext;
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
