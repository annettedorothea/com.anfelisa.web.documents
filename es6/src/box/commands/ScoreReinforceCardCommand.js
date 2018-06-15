import AbstractScoreReinforceCardCommand from "../../../gen/box/commands/AbstractScoreReinforceCardCommand";

export default class ScoreReinforceCardCommand extends AbstractScoreReinforceCardCommand {
    execute() {
        return new Promise((resolve, reject) => {
            let queryParams = [];
            queryParams.push({
                key: "reinforceCardId",
                value: this.commandData.reinforceCardId
            });
            queryParams.push({
                key: "quality",
                value: this.commandData.quality
            });
            this.httpPost("api/reinforce-card/score", queryParams).then((data) => {
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
