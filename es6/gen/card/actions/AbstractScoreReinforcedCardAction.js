import Action from "../../ace/Action";
import ScoreReinforcedCardCommand from "../../../src/card/commands/ScoreReinforcedCardCommand";

export default class AbstractScoreReinforcedCardAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'card.ScoreReinforcedCardAction', false);
    }

	getCommand() {
			return new ScoreReinforcedCardCommand(this.actionData);
	}

	
    preUpdateUI() {
    }

    postUpdateUI() {
    }

}

/*       S.D.G.       */
