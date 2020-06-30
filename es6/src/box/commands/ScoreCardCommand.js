import AbstractScoreCardCommand from "../../../gen/box/commands/AbstractScoreCardCommand";

export default class ScoreCardCommand extends AbstractScoreCardCommand {

    validateCommandData() {
        return true;
    }

    handleResponse(resolve) {
    	this.commandData.outcome = this.ok;
    	resolve();
    }
    handleError(resolve, reject) {
    	reject(this.commandData.error);
    }
}

/*       S.D.G.       */
