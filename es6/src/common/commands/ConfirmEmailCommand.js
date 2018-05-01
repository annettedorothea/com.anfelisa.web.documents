import AbstractConfirmEmailCommand from "../../../gen/common/commands/AbstractConfirmEmailCommand";

export default class ConfirmEmailCommand extends AbstractConfirmEmailCommand {
    execute() {
        return new Promise((resolve, reject) => {
            let queryParams = [];
            queryParams.push({
                key: "token",
                value: this.commandParam.token
            });
            this.commandData.hash = "#";
            this.httpPut("api/users/confirm", queryParams).then(() => {
                this.commandData.outcome = this.ok;
                this.commandData.messageKey = "emailConfirmed";
                resolve();
            }, (error) => {
                error.errorKey = "failedToConfirmEmail";
                this.commandData.error = error;
                this.commandData.outcome = this.error;
                resolve();
            });
        });
    }
}

/*       S.D.G.       */
