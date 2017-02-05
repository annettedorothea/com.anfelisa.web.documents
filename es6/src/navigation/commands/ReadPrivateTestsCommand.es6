'use strict';

class ReadPrivateTestsCommand extends AbstractReadPrivateTestsCommand {
    execute() {
        return new Promise((resolve) => {
            var queryParams = [];
            queryParams.push({
                key: "lessonId",
                value: this.commandParam.lessonId
            });
            this.httpGet("api/tests/private", queryParams).then((data) => {
                this.commandData.data = data;
                this.commandData.outcome = this.ok;
                resolve();
            }, (error) => {
                this.commandData.messageKey = "readPrivateTestsFailed";
                this.commandData.error = error;
                this.commandData.outcome = this.error;
                resolve();
            });
        });
    }
}

/*       S.D.G.       */
