import AbstractUpdateBoxCommand from "../../../gen/box/commands/AbstractUpdateBoxCommand";
import {getState} from "../../../gen/ace/AppState";

export default class UpdateBoxCommand extends AbstractUpdateBoxCommand {

    initCommandData() {
        const appState = getState();
        this.commandData.boxId = appState.data.boxId;
        this.commandData.maxInterval = appState.data.editedMaxInterval;
        return true;
    }

    handleResponse(resolve, reject) {
        this.commandData.editedMaxInterval = "";
        this.commandData.editMaxInterval = false;
    	this.commandData.outcome = this.ok;
    	resolve();
    }
    handleError(resolve, reject) {
    	reject(this.commandData.error);
    }
}

/*       S.D.G.       */
