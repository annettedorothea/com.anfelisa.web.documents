import AbstractConfirmEmailCommand from "../../../gen/registration/commands/AbstractConfirmEmailCommand";

export default class ConfirmEmailCommand extends AbstractConfirmEmailCommand {
    execute() {
        return new Promise((resolve) => {
            const data = {
                username: this.commandData.username,
                token: this.commandData.token
            };
            this.httpPut("api/users/confirm", [], data).then(() => {
                this.commandData.hash = "#";
                this.commandData.outcome = this.ok;
                this.commandData.messageKey = "emailConfirmed";
                resolve();
            });
        });
    }
}

/*       S.D.G.       */
