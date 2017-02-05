'use strict';

class CheckUsernameCommand extends AbstractCheckUsernameCommand {
    execute() {
        return new Promise((resolve) => {
            if (!this.commandParam.username) {
                this.commandData.outcome = this.empty;
                this.commandData.id = "username";
                resolve();
            } else {
                var queryParams = [];
                queryParams.push({
                    key: "username",
                    value: this.commandParam.username
                });
                this.httpGet("api/users/username", queryParams).then((data) => {
                    if (data.available === true) {
                        this.commandData.outcome = this.available;
                    } else {
                        this.commandData.outcome = this.notAvailable;
                    }
                    resolve();
                }, (error) => {
                    this.commandData.messageKey = "checkUsernameFailed";
                    this.commandData.error = error;
                    this.commandData.outcome = this.error;
                    resolve();
                });
            }
        });
    }
}

/*       S.D.G.       */
