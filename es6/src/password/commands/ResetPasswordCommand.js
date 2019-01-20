import AbstractResetPasswordCommand from "../../../gen/password/commands/AbstractResetPasswordCommand";
import * as AppState from "../../../gen/ace/AppState";

export default class ResetPasswordCommand extends AbstractResetPasswordCommand {

    initCommandData() {
        this.commandData.token = AppState.get_state_State_data_ResetPassword_token();
        return true;
    }

    handleResponse(resolve, reject) {
        this.commandData.hash = "#";
        this.commandData.messageKey = "passwordReset";
        this.commandData.outcome = this.ok;
    	resolve();
    }
    handleError(resolve, reject) {
        this.commandData.hash = "#";
        this.commandData.outcome = this.error;
    	reject(this.commandData.error);
    }
}

/*       S.D.G.       */
