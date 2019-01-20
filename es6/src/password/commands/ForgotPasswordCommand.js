import AbstractForgotPasswordCommand from "../../../gen/password/commands/AbstractForgotPasswordCommand";
import * as AppState from "../../../gen/ace/AppState"

export default class ForgotPasswordCommand extends AbstractForgotPasswordCommand {

    initCommandData() {
        this.commandData.username = AppState.get_state_State_data_ForgotPassword_username();
        this.commandData.language = AppState.get_state_State_language();
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
