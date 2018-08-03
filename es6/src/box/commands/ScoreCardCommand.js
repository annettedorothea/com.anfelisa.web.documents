import AbstractScoreCardCommand from "../../../gen/box/commands/AbstractScoreCardCommand";

export default class ScoreCardCommand extends AbstractScoreCardCommand {
    execute() {
        return new Promise((resolve, reject) => {
            this.httpPost("api/card/score", [], this.commandData).then((data) => {
                this.commandData.outcome = this.ok;
                resolve();
            }, error => {
                reject(error)
            });
        });
    }
}

/*       S.D.G.       */
