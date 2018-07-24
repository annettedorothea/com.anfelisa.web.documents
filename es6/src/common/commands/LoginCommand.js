import AbstractLoginCommand from "../../../gen/common/commands/AbstractLoginCommand";

export default class LoginCommand extends AbstractLoginCommand {
    execute() {
        return new Promise((resolve) => {
            this.httpGet("api/user/role").then((data) => {
                this.commandData.role = data.role;
                this.commandData.hash = "#dashboard";
                if (this.commandData.saveInLocalStorage === true) {
                    this.commandData.outcome = this.saveInLocalStorage;
                } else {
                    this.commandData.outcome = this.doNotSaveInLocalStorage;
                }
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
