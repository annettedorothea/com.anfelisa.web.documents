'use strict';

class SaveBoxCommand extends AbstractSaveBoxCommand {
    execute() {
        return new Promise((resolve) => {
            if (!this.commandParam.name) {
                this.commandData.messageKey = "dataInvalid";
                this.commandData.outcome = this.dataInvalid;
                resolve();
            } else {
                var data = {
                    boxId: this.commandParam.boxId,
                    name: this.commandParam.name,
                    username: this.commandParam.username
                }
                if (this.commandParam.boxId) {
                    this.httpPut("api/boxes/update", [], data).then(() => {
                        this.commandData.outcome = this.saved;
                        this.commandData.hash = "profile";
                        resolve();
                    }, (error) => {
                        this.commandData.messageKey = "saveBoxFailed";
                        this.commandData.error = error;
                        this.commandData.outcome = this.error;
                        resolve();
                    });
                } else {
                    this.httpPost("api/boxes/create", [], data).then(() => {
                        this.commandData.outcome = this.saved;
                        this.commandData.hash = "profile";
                        resolve();
                    }, (error) => {
                        this.commandData.messageKey = "saveBoxFailed";
                        this.commandData.error = error;
                        this.commandData.outcome = this.error;
                        resolve();
                    });
                }
            }
        });
    }
}

/*       S.D.G.       */
