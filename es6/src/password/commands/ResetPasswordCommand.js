import AbstractResetPasswordCommand from "../../../gen/password/commands/AbstractResetPasswordCommand";

export default class ResetPasswordCommand extends AbstractResetPasswordCommand {
    execute() {
        return new Promise((resolve) => {
            this.httpPut("api/users/resetpassword", [], this.commandData).then(() => {
                this.commandData.hash = "#";
                this.commandData.outcome = this.ok;
                this.commandData.messageKey = "passwordReset";
                resolve();
            }, (error) => {
                this.commandData.hash = "#";
                error.errorKey = "failedToResetPassword";
                this.commandData.error = error;
                this.commandData.outcome = this.error;
                resolve();
            });
        });
    }
}

/*       S.D.G.       */
