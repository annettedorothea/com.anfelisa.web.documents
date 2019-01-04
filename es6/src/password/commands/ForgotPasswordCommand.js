import AbstractForgotPasswordCommand from "../../../gen/password/commands/AbstractForgotPasswordCommand";
import {getAppState} from "../../app/App";

export default class ForgotPasswordCommand extends AbstractForgotPasswordCommand {

    initCommandData() {
        const appState = getAppState();
        this.commandData.username = appState.data.username;
        this.commandData.language = appState.language;
        return true;
    }

    handleResponse(resolve) {
        this.commandData.hash = "#";
        this.commandData.messageKey = "passwordRequestSubmitted";
    	this.commandData.outcome = this.ok;
    	resolve();
    }
    handleError(resolve, reject) {
    	reject(this.commandData.error);
    }
}

/*       S.D.G.       */
