import AbstractScoreCardCommand from "../../../gen/box/commands/AbstractScoreCardCommand";

export default class ScoreCardCommand extends AbstractScoreCardCommand {

    validateCommandData() {
        return true;
    }

    handleResponse(resolve) {
    	this.addOkOutcome();
    	resolve();
    }
    handleError(resolve, reject) {
    	reject(this.commandData.message);
    }
}

/*       S.D.G.       */
