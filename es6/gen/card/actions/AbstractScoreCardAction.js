import Action from "../../ace/Action";
import ScoreCardCommand from "../../../src/card/commands/ScoreCardCommand";

export default class AbstractScoreCardAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'card.ScoreCardAction', false);
    }

	getCommand() {
		return new ScoreCardCommand(this.actionData);
	}

	preUpdateUI() {
	}

	postUpdateUI() {
	}

}

/*       S.D.G.       */
