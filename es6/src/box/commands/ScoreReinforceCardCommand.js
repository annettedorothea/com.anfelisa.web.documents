import AbstractScoreReinforceCardCommand from "../../../gen/box/commands/AbstractScoreReinforceCardCommand";

export default class ScoreReinforceCardCommand extends AbstractScoreReinforceCardCommand {
    execute() {
        return new Promise((resolve) => {
            this.httpPost("api/reinforce-card/score", [], this.commandData).then((data) => {
                this.commandData.outcome = this.ok;
                resolve();
            });
        });
    }
}

/*       S.D.G.       */
