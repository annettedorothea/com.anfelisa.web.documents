'use strict';

class ReadNextCardCommand extends AbstractReadNextCardCommand {
    execute() {
        return new Promise((resolve) => {
            var queryParams = [];
            queryParams.push({
                key: "boxId",
                value: this.commandParam.boxId
            });
            this.httpGet("api/boxes/next", queryParams).then((data) => {
                this.commandData.data = data;
                this.commandData.outcome = this.ok;
                resolve();
            }, (error) => {
                this.commandData.messageKey = "readNextCardFailed";
                this.commandData.error = error;
                this.commandData.outcome = this.error;
                resolve();
            });
        });
    }
}

/*       S.D.G.       */
