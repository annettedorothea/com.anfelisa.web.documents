'use strict';

class SaveBoxConfigCommand extends AbstractSaveBoxConfigCommand {
    execute() {
        return new Promise((resolve) => {
            var data = {
                boxId: this.commandParam.boxId,
                boxOfCourseList: this.commandParam.boxOfCourseList,
                username: this.commandParam.username
            };
            this.httpPut("api/boxes/config", [], data).then(() => {
                this.commandData.outcome = this.saved;
                this.commandData.boxId = this.commandParam.boxId;
                resolve();
            }, (error) => {
                this.commandData.messageKey = "saveBoxFailed";
                this.commandData.error = error;
                this.commandData.outcome = this.error;
                resolve();
            });
        });
    }
}

/*       S.D.G.       */
