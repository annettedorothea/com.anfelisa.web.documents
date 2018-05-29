import AbstractInitialLoginCommand from "../../../gen/common/commands/AbstractInitialLoginCommand";

export default class InitialLoginCommand extends AbstractInitialLoginCommand {
    execute() {
        return new Promise((resolve, reject) => {
            this.httpGet("api/user/role").then((data) => {
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
