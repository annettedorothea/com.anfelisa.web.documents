'use strict';

class ScoreCardCommand extends AbstractScoreCardCommand {
    execute() {
        return new Promise((resolve) => {
            var queryParams = [];
            queryParams.push({
                key: "scheduledCardId",
                value: this.commandParam.cardOfBoxId
            });
            queryParams.push({
                key: "quality",
                value: this.commandParam.quality
            });
            this.httpPost("api/cards/score", queryParams).then(() => {
                this.commandData.outcome = this.scored;
                this.commandData.hash = "box/" + this.commandParam.boxId;
                resolve();
            }, (error) => {
                this.commandData.messageKey = "scoreCardFailed";
                this.commandData.error = error;
                this.commandData.outcome = this.error;
                resolve();
            });
        });
    }
}

/*       S.D.G.       */
