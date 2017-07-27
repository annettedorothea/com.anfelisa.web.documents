'use strict';

class RecalculateScheduledCardsCommand extends AbstractRecalculateScheduledCardsCommand {
    execute() {
        return new Promise((resolve) => {
            var queryParams = [];
            queryParams.push({
                key: "boxId",
                value: this.commandParam.boxId
            });
            queryParams.push({
                key: "daysBehind",
                value: this.commandParam.daysBehind
            });
            this.httpPut("api/boxes/recalculate", queryParams).then(() => {
                this.commandData.outcome = this.ok;
                this.commandData.boxId = this.commandParam.boxId;
                resolve();
            }, (error) => {
                this.commandData.messageKey = "recalulateScheduledCardsFailed";
                this.commandData.error = error;
                this.commandData.outcome = this.error;
                resolve();
            });
        });
    }
}

/*       S.D.G.       */
