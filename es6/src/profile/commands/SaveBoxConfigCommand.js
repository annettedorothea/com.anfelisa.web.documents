import AbstractSaveBoxConfigCommand from "../../../gen/profile/commands/AbstractSaveBoxConfigCommand";

export default class SaveBoxConfigCommand extends AbstractSaveBoxConfigCommand {
    execute() {
        return new Promise((resolve, reject) => {
            const data = {
                boxId: this.commandParam.boxId,
                boxOfCourseList: this.commandParam.boxOfCourseList,
                username: this.commandParam.username
            };
            this.httpPut("api/boxes/config", [], data).then(() => {
                this.commandData.outcome = this.saved;
                this.commandData.boxId = this.commandParam.boxId;
                resolve();
            }, (error) => {
                reject(error);
            });
        });
    }
}

/*       S.D.G.       */
