import AbstractLoadUserCommand from "../../../gen/profile/commands/AbstractLoadUserCommand";

export default class LoadUserCommand extends AbstractLoadUserCommand {
    execute() {
        return new Promise((resolve, reject) => {
            this.httpGet("api/user/get").then((data) => {
                this.commandData.role = data.role;
                this.commandData.userId = data.userId;
                this.commandData.email = data.email;
                this.commandData.emailConfirmed = data.emailConfirmed;
                this.commandData.outcome = this.ok;
                resolve();
            }, (error) => {
                if (error.code === 401) {
                    error.errorKey = "unauthorized";
                    this.commandData.error = error;
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
