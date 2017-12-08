import AbstractScoreReinforcedCardCommand from "../../../gen/card/commands/AbstractScoreReinforcedCardCommand";

class ScoreReinforcedCardCommand extends AbstractScoreReinforcedCardCommand {
    execute() {
        return new Promise((resolve) => {
            this.commandData.quality = this.commandParam.quality;
            if (this.commandData.quality < 4) {
                this.commandData.outcome = this.keep;
            } else {
                this.commandData.outcome = this.remove;
            }
			resolve();
        });
    }
}

/*       S.D.G.       */
