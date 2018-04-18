import AbstractScoreCardCommand from "../../../gen/card/commands/AbstractScoreCardCommand";

export default class ScoreCardCommand extends AbstractScoreCardCommand {
    execute() {
        return new Promise((resolve, reject) => {
            let queryParams = [];
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
                reject(error);
            });
        });
    }
}

/*       S.D.G.       */
