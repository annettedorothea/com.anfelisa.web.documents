'use strict';

class ConfirmEmailCommand extends AbstractConfirmEmailCommand {
    execute() {
        return new Promise((resolve) => {
            this.httpPut("api/users/confirm").then(() => {
                this.commandData.outcome = this.saved;
                this.commandData.hash = "profile";
                this.commandData.password = this.commandParam.password;
                this.commandData.username = this.commandParam.username;
                resolve();
            }, (error) => {
                this.commandData.messageKey = "confirmEmailFailed";
                this.commandData.error = error;
                this.commandData.outcome = this.error;
                resolve();
            });
        });
    }
}

/*       S.D.G.       */
