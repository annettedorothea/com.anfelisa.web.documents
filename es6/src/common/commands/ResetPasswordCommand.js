import AbstractResetPasswordCommand from "../../../gen/common/commands/AbstractResetPasswordCommand";

export default class ResetPasswordCommand extends AbstractResetPasswordCommand {
    execute() {
        return new Promise((resolve, reject) => {
            let queryParams = [];
            queryParams.push({
                key: "token",
                value: this.commandData.token
            });
            queryParams.push({
                key: "password",
                value: this.commandData.password
            });
            this.commandData.hash = "#";
            this.httpPut("api/users/resetpassword", queryParams).then(() => {
                this.commandData.outcome = this.ok;
                this.commandData.messageKey = "passwordReset";
                resolve();
            }, (error) => {
                error.errorKey = "failedToResetPassword";
                this.commandData.error = error;
                this.commandData.outcome = this.error;
                resolve();
            });
        });
    }
}

/*       S.D.G.       */
