import AbstractDeleteUserAdminCommand from "../../../gen/admin/commands/AbstractDeleteUserAdminCommand";

export default class DeleteUserAdminCommand extends AbstractDeleteUserAdminCommand {
    execute() {
        return new Promise((resolve, reject) => {
            if (this.commandParam.deletedUsername === "Admin") {
                this.commandData.outcome = this.defaultAdmin;
                this.commandData.messageKey = "doNotDeleteDefaultAdmin";
                resolve();
            } else if (this.commandParam.deletedUsername === this.commandParam.username) {
                this.commandData.outcome = this.self;
                this.commandData.messageKey = "doNotDeleteYourself";
                resolve();
            } else {
                let queryParams = [];
                queryParams.push({
                    key: "deletedUsername",
                    value: this.commandParam.deletedUsername
                });

                this.httpDelete("api/user/delete", queryParams).then(() => {
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
            }
        });
    }
}

/*       S.D.G.       */
