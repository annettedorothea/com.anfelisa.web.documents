'use strict';

class ReadResultCommand extends AbstractReadResultCommand {
    execute() {
        return new Promise((resolve) => {
            this.commandData.language = this.commandParam.language;
            var queryParams = [];
            queryParams.push({
                key: "resultId",
                value: this.commandParam.resultId
            });
            this.httpGet("api/results/single", queryParams).then((data) => {
                this.commandData.data = data;
                this.commandData.outcome = this.ok;
                resolve();
            }, (error) => {
                this.commandData.messageKey = "readResultFailed";
                this.commandData.error = error;
                this.commandData.outcome = this.error;
                resolve();
            });
        });
    }
}

/*       S.D.G.       */
