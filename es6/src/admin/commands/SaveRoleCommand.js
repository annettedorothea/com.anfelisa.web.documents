import AbstractSaveRoleCommand from "../../../gen/admin/commands/AbstractSaveRoleCommand";

export default class SaveRoleCommand extends AbstractSaveRoleCommand {
    execute() {
        return new Promise((resolve, reject) => {
            let queryParams = [];
            queryParams.push({
                key: "userId",
                value: this.commandParam.userId
            });
            queryParams.push({
                key: "role",
                value: this.commandParam.role
            });
            this.httpPut("api/user/role", queryParams).then(() => {
                this.commandData.outcome = this.ok;
                this.commandData.username = this.commandParam.username;
                this.commandData.password = this.commandParam.password;
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
