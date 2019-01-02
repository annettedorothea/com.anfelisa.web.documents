import AbstractForgotPasswordCommand from "../../../gen/password/commands/AbstractForgotPasswordCommand";
import * as App from "../../app/App";

export default class ForgotPasswordCommand extends AbstractForgotPasswordCommand {

    initCommandData() {
        this.commandData.username = App.appState.data.username;
        this.commandData.language = App.appState.language;
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
