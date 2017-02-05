'use strict';

class LoginCommand extends AbstractLoginCommand {
    execute() {
        return new Promise((resolve) => {
            this.httpPost("api/user/login").then((data) => {
                this.commandData.hash = "private";
                this.commandData.username = this.commandParam.username;
                this.commandData.password = this.commandParam.password;
                this.commandData.outcome = this.ok;
                resolve();
            }, (error) => {
                this.commandData.messageKey = "loginFailed";
                this.commandData.error = error;
                this.commandData.outcome = this.error;
                resolve();
            });
        });
    }
}

/*       S.D.G.       */
