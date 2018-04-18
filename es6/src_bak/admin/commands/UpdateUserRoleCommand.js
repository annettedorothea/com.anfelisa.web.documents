import AbstractUpdateUserRoleCommand from "../../../gen/admin/commands/AbstractUpdateUserRoleCommand";

export default class UpdateUserRoleCommand extends AbstractUpdateUserRoleCommand {
    execute() {
        return new Promise((resolve, reject) => {
            if (this.commandParam.editedUsername === "Admin") {
                this.commandData.outcome = this.defaultAdmin;
                this.commandData.messageKey = "doNotChangeDefaultAdmin";
                resolve();
            } else {
                const userUpdateData = {
                    editedUsername: this.commandParam.editedUsername,
                    role: this.commandParam.role
                };
                this.httpPut("api/users/update", [], userUpdateData).then(() => {
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
