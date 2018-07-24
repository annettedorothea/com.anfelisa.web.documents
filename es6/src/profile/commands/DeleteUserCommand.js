import AbstractDeleteUserCommand from "../../../gen/profile/commands/AbstractDeleteUserCommand";

export default class DeleteUserCommand extends AbstractDeleteUserCommand {
    execute() {
        return new Promise((resolve, reject) => {
            let queryParams = [];
            queryParams.push({
                key: "deletedUsername",
                value: this.commandData.deletedUsername
            });
            this.httpDelete("api/user/delete", queryParams).then((data) => {
                this.commandData.outcome = this.ok;
                resolve();
            }, (error) => {
                if (error.code === 401) {
                    error.errorKey = "unauthorized";
                    this.commandData.error = error;
                    this.commandData.outcome = this.unauthorized;
                    resolve();
                } else if (error.code === 400) {
                    error.errorKey = "badRequestDeleteUser";
                    this.commandData.error = error;
                    this.commandData.outcome = this.badRequest;
                    resolve();
                } else {
                    reject(error.text);
                }
            });
        });
    }
}

/*       S.D.G.       */
