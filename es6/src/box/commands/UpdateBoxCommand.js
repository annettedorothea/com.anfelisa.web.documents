import AbstractUpdateBoxCommand from "../../../gen/box/commands/AbstractUpdateBoxCommand";
import * as App from "../../app/App";

export default class UpdateBoxCommand extends AbstractUpdateBoxCommand {

    initCommandData() {
        this.commandData.boxId = App.appState.data.boxId;
        this.commandData.maxInterval = App.appState.data.editedMaxInterval;
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
