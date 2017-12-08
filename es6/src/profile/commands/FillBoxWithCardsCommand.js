'use strict';

class FillBoxWithCardsCommand extends AbstractFillBoxWithCardsCommand {
    execute() {
        return new Promise((resolve) => {
            var queryParams = [];
            queryParams.push({
                key: "boxId",
                value: this.commandParam.boxId
            });
            this.httpPost("api/box/fill", queryParams).then(() => {
                this.commandData.outcome = this.filled;
                this.commandData.hash = "profile";
                resolve();
            }, (error) => {
                this.commandData.messageKey = "fillBoxWithCardsFailed";
                this.commandData.error = error;
                this.commandData.outcome = this.error;
                resolve();
            });
        });
    }
}

/*       S.D.G.       */
