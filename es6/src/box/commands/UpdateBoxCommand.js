import AbstractUpdateBoxCommand from "../../../gen/box/commands/AbstractUpdateBoxCommand";
import {getState} from "../../../gen/ace/AppState";

export default class UpdateBoxCommand extends AbstractUpdateBoxCommand {

    initCommandData() {
        const appState = getState();
        this.commandData.boxId = appState.data.boxId;
        if (appState.data.editMaxInterval === true) {
            this.commandData.maxInterval = appState.data.editedMaxInterval;
        } else {
            this.commandData.maxInterval = appState.data.maxInterval;
        }
        if (appState.data.editMaxCardsPerDay === true) {
            this.commandData.maxCardsPerDay = appState.data.editedMaxCardsPerDay;
        } else {
            this.commandData.maxCardsPerDay = appState.data.maxCardsPerDay;
        }
        return true;
    }

    handleResponse(resolve, reject) {
        this.commandData.editedMaxInterval = "";
        this.commandData.editMaxInterval = false;
        this.commandData.editedMaxCardsPerDay = "";
        this.commandData.editMaxCardsPerDay = false;
    	this.commandData.outcome = this.ok;
    	resolve();
    }
    handleError(resolve, reject) {
    	reject(this.commandData.error);
    }
}

/*       S.D.G.       */
