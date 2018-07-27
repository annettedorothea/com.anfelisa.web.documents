import AbstractForgotPasswordCommand from "../../../gen/password/commands/AbstractForgotPasswordCommand";

export default class ForgotPasswordCommand extends AbstractForgotPasswordCommand {
    execute() {
        return new Promise((resolve) => {
            this.httpPost("api/users/forgot-password", [], this.commandData).then(() => {
                this.commandData.hash = "#";
                this.commandData.outcome = this.ok;
                this.commandData.messageKey = "passwordRequestSubmitted";
                resolve();
            });
        });
    }
}

/*       S.D.G.       */
