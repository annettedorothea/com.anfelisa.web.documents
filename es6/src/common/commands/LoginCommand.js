import AbstractLoginCommand from "../../../gen/common/commands/AbstractLoginCommand";

export default class LoginCommand extends AbstractLoginCommand {
    execute() {
        return new Promise((resolve) => {
            this.httpGet("api/user/role").then((data) => {
                this.commandData.username = this.commandParam.username;
                this.commandData.password = this.commandParam.password;
                this.commandData.role = data.credentialsRole;
                this.commandData.outcome = this.ok;
                resolve();
            }, (error) => {
                if (error.code === 401) {
                    error.errorKey = "loginFailed";
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
