import AbstractResetPasswordCommand from "../../../gen/password/commands/AbstractResetPasswordCommand";

export default class ResetPasswordCommand extends AbstractResetPasswordCommand {

    initCommandData() {
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
