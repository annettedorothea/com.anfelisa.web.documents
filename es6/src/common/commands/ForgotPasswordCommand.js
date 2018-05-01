import AbstractForgotPasswordCommand from "../../../gen/common/commands/AbstractForgotPasswordCommand";

export default class ForgotPasswordCommand extends AbstractForgotPasswordCommand {
    execute() {
        return new Promise((resolve) => {
            this.commandData.language = this.commandParam.language;
            let queryParams = [];
            queryParams.push({
                key: "username",
                value: this.commandParam.username
            });
            queryParams.push({
                key: "language",
                value: this.commandParam.language
            });
            this.commandData.hash = "#";
            this.commandData.outcome = this.ok;
            this.commandData.messageKey = "passwordRequestSubmitted";
            this.httpPost("api/users/forgot-password", queryParams).then(() => {
                resolve();
            }, () => {
                resolve();
            });
        });
    }
}

/*       S.D.G.       */
