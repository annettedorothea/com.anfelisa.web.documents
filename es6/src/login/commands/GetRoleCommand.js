import AbstractGetRoleCommand from "../../../gen/login/commands/AbstractGetRoleCommand";

export default class GetRoleCommand extends AbstractGetRoleCommand {
    execute() {
        return new Promise((resolve, reject) => {
            this.httpGet("api/user/role").then((data) => {
                this.commandData.role = data.role;
                this.commandData.hash = "#dashboard";
                this.commandData.outcome = this.ok;
                resolve();
            }, (error) => {
                if (error.code === 401) {
                    error.errorKey = "loginFailed";
                    this.commandData.error = error;
                    this.commandData.outcome = this.unauthorized;
                    resolve();
                } else {
                    reject(error);
                }
            });
        });
    }
}

/*       S.D.G.       */
