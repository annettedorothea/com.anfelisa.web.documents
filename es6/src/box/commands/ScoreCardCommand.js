import AbstractScoreCardCommand from "../../../gen/box/commands/AbstractScoreCardCommand";

export default class ScoreCardCommand extends AbstractScoreCardCommand {
    execute() {
        return new Promise((resolve, reject) => {
            let queryParams = [];
            queryParams.push({
                key: "scoredCardScheduledCardId",
                value: this.commandData.scheduledCardId
            });
            queryParams.push({
                key: "quality",
                value: this.commandData.quality
            });
            this.httpPost("api/card/score", queryParams).then((data) => {
                this.commandData.outcome = this.ok;
                resolve();
            }, (error) => {
                if (error.code === 401) {
                    error.errorKey = "unauthorized";
                    this.commandData.error = error;
                    this.commandData.outcome = this.unauthorized;
                    resolve();
                } else {
                    reject(error.text);
                }
            });
        });
    }
}

/*       S.D.G.       */
