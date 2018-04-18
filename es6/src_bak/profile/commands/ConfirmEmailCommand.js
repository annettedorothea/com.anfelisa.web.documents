import AbstractConfirmEmailCommand from "../../../gen/profile/commands/AbstractConfirmEmailCommand";

export default class ConfirmEmailCommand extends AbstractConfirmEmailCommand {
    execute() {
        return new Promise((resolve, reject) => {
            this.httpPut("api/users/confirm").then(() => {
                this.commandData.outcome = this.saved;
                this.commandData.hash = "profile";
                this.commandData.password = this.commandParam.password;
                this.commandData.username = this.commandParam.username;
                resolve();
            }, (error) => {
                reject(error);
            });
        });
    }
}

/*       S.D.G.       */
