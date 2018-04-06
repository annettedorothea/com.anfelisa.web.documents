import AbstractLoadAllUsersCommand from "../../../gen/admin/commands/AbstractLoadAllUsersCommand";

export default class LoadAllUsersCommand extends AbstractLoadAllUsersCommand {
    execute() {
        return new Promise((resolve, reject) => {
            this.httpGet("api/users/all").then((data) => {
                this.commandData.data = data;
                this.commandData.outcome = this.ok;
                resolve();
            }, (error) => {
                if (error.code === 401) {
                    this.commandData.outcome = this.unauthorized;
                    resolve();
                } else {
                    reject(error.text);
                }
            });
        });
    }
}

/*       S.D.G.       */
