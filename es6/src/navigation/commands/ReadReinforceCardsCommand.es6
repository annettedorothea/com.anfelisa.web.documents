'use strict';

class ReadReinforceCardsCommand extends AbstractReadReinforceCardsCommand {
    execute() {
        return new Promise((resolve) => {
            var queryParams = [];
            queryParams.push({
                key: "boxId",
                value: this.commandParam.boxId
            });
            this.httpGet("api/cards/reinforce", queryParams).then((data) => {
                this.commandData.data = data;
                this.commandData.outcome = this.ok;
                resolve();
            }, (error) => {
                this.commandData.messageKey = "readReinforceCardsFailed";
                this.commandData.error = error;
                this.commandData.outcome = this.error;
                resolve();
            });
        });
    }
}

/*       S.D.G.       */
