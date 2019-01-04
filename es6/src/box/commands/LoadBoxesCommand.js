import AbstractLoadBoxesCommand from "../../../gen/box/commands/AbstractLoadBoxesCommand";
import {getAppState} from "../../app/App";

export default class LoadBoxesCommand extends AbstractLoadBoxesCommand {

    initCommandData() {
        return true;
    }
    handleResponse(resolve) {
    	this.commandData.outcome = this.ok;
    	resolve();
    }
    handleError(resolve, reject) {
    	reject(this.commandData.error);
    }
}

/*       S.D.G.       */
