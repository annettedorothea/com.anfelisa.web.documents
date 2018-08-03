import AbstractLoadUserCommand from "../../../gen/profile/commands/AbstractLoadUserCommand";

export default class LoadUserCommand extends AbstractLoadUserCommand {
    execute() {
        return new Promise((resolve, reject) => {
            this.httpGet("api/user/get").then((data) => {
                this.commandData.data = data;
                this.commandData.data.showDeleteUserDialog = false;
                this.commandData.outcome = this.ok;
                resolve();
            }, error => {
                reject(error)
            });
        });
    }
}

/*       S.D.G.       */
