import AbstractGetRoleCommand from "../../../gen/common/commands/AbstractGetRoleCommand";

export default class GetRoleCommand extends AbstractGetRoleCommand {
    execute() {
        return new Promise((resolve, reject) => {
            this.httpGet("api/user/role").then((data) => {
                this.commandData.username = this.commandParam.username;
                this.commandData.role = data.credentialsRole;
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
