'use strict';

class SaveResultCommand extends AbstractSaveResultCommand {
    execute() {
        return new Promise((resolve) => {
            this.commandData.language = this.commandParam.language;
            if (this.commandParam.username == undefined) {
                this.commandData.points = this.commandParam.points;
                this.commandData.maxPoints = this.commandParam.maxPoints;
                this.commandData.outcome = this.noCredentials;
                resolve();
            } else {
                this.commandData.testId = this.commandParam.testId;
                var data = {
                    username: this.commandParam.username,
                    testId: this.commandParam.testId,
                    json: this.commandParam.json,
                    points: this.commandParam.points,
                    maxPoints: this.commandParam.maxPoints
                }
                this.httpPost("api/results/save", [], data).then((data) => {
                    this.commandData.outcome = this.resultSaved;
                    this.commandData.boxIds = data.boxIds;
                    this.commandData.resultId = data.resultId;
                    this.commandData.hash = this.commandParam.hash + "/" + data;
                    resolve();
                }, (error) => {
                    this.commandData.messageKey = "saveResultFailed";
                    this.commandData.error = error;
                    this.commandData.outcome = this.serverError;
                    resolve();
                });
            }
        });
    }
}

/*       S.D.G.       */
