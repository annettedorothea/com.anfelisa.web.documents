'use strict';

class SaveProfileCommand extends AbstractSaveProfileCommand {
    execute() {
        return new Promise((resolve) => {
            if (!this.commandParam.email || !this.commandParam.name || !this.commandParam.prename) {
                this.commandData.messageKey = "dataInvalid";
                this.commandData.outcome = this.dataInvalid;
                resolve();
            } else {
                var data = {
                    username: this.commandParam.username,
                    name: this.commandParam.name,
                    prename: this.commandParam.prename,
                    email: this.commandParam.email
                };
                this.httpPut("api/users/update", [], data).then(() => {
                    this.commandData.outcome = this.saved;
                    this.commandData.hash = "profile";
                    resolve();
                }, (error) => {
                    this.commandData.messageKey = "saveProfileFailed";
                    this.commandData.error = error;
                    this.commandData.outcome = this.error;
                    resolve();
                });
            }
        });
    }
}

/*       S.D.G.       */
