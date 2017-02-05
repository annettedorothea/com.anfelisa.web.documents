'use strict';

class OpenProfileCommand extends AbstractOpenProfileCommand {
    execute() {
        return new Promise((resolve) => {
            this.httpGet("api/users/info").then((data) => {
                this.commandData.data = data;
                this.commandData.outcome = this.userInfoRead;
                resolve();
            }, (error) => {
                this.commandData.messageKey = "readProfileFailed";
                this.commandData.error = error;
                this.commandData.outcome = this.error;
                resolve();
            });
        });
    }
}

/*       S.D.G.       */
