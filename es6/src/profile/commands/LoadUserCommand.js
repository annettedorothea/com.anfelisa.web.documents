import AbstractLoadUserCommand from "../../../gen/profile/commands/AbstractLoadUserCommand";

export default class LoadUserCommand extends AbstractLoadUserCommand {
    execute() {
        return new Promise((resolve, reject) => {
            this.httpGet("api/user/get").then((data) => {
                this.commandData.username = this.commandParam.username;
                this.commandData.role = data.credentialsRole;
                this.commandData.userId = data.userId;
                this.commandData.email = data.email;
                this.commandData.emailConfirmed = data.emailConfirmed;
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
