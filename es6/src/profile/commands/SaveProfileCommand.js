import AbstractSaveProfileCommand from "../../../gen/profile/commands/AbstractSaveProfileCommand";

export default class SaveProfileCommand extends AbstractSaveProfileCommand {
    execute() {
        return new Promise((resolve, reject) => {
            if (!this.commandParam.email) {
                this.commandData.messageKey = "dataInvalid";
                this.commandData.outcome = this.dataInvalid;
                resolve();
            } else {
                const data = {
                    username: this.commandParam.username,
                    email: this.commandParam.email
                };
                this.httpPut("api/users/update", [], data).then(() => {
                    this.commandData.outcome = this.saved;
                    this.commandData.hash = "profile";
                    resolve();
                }, (error) => {
                    reject(error);
                });
            }
        });
    }
}

/*       S.D.G.       */
