import AbstractUpdatePasswordAdminCommand from "../../../gen/admin/commands/AbstractUpdatePasswordAdminCommand";

export default class UpdatePasswordAdminCommand extends AbstractUpdatePasswordAdminCommand {
    execute() {
        return new Promise((resolve, reject) => {
            const userUpdateData = {
                editedUsername: this.commandParam.editedUsername,
                newPassword: this.commandParam.newPassword
            };
            this.httpPut("api/users/password", [], userUpdateData).then(() => {
                if (this.commandParam.editedUsername === this.commandParam.username) {
                    this.commandData.password = this.commandParam.newPassword;
                    this.commandData.username = this.commandParam.username;
                    this.commandData.outcome = this.self;
                } else {
                    this.commandData.outcome = this.ok;
                }
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
