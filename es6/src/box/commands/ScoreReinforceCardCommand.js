import AbstractScoreReinforceCardCommand from "../../../gen/box/commands/AbstractScoreReinforceCardCommand";

export default class ScoreReinforceCardCommand extends AbstractScoreReinforceCardCommand {
    execute() {
        return new Promise((resolve, reject) => {
            this.httpPost("api/reinforce-card/score", [], this.commandData).then((data) => {
                this.commandData.outcome = this.ok;
                resolve();
            }, error => {
                reject(error)
            });
        });
    }
}

/*       S.D.G.       */
