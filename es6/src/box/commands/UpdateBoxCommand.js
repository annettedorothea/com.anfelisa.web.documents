import AbstractUpdateBoxCommand from "../../../gen/box/commands/AbstractUpdateBoxCommand";
import {getAppState} from "../../app/App";

export default class UpdateBoxCommand extends AbstractUpdateBoxCommand {

    initCommandData() {
        const appState = getAppState();
        this.commandData.boxId = appState.data.boxId;
        this.commandData.maxInterval = appState.data.editedMaxInterval;
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
