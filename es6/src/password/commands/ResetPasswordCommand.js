import AbstractResetPasswordCommand from "../../../gen/password/commands/AbstractResetPasswordCommand";
import * as AppState from "../../../gen/ace/ReadAppState";

export default class ResetPasswordCommand extends AbstractResetPasswordCommand {

    validateCommandData() {
        this.commandData.token = AppState.get_state_State_data_ResetPassword_token();
        return true;
    }

    handleResponse(resolve) {
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
