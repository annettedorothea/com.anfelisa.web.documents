import Action from "../../ace/Action";
import RateWordCommand from "../../../src/vocabulary/commands/RateWordCommand";

export default class AbstractRateWordAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'vocabulary.RateWordAction', false);
    }

	getCommand() {
		return new RateWordCommand(this.actionData);
	}

	preUpdateUI() {
	}

	postUpdateUI() {
	}

}

/*       S.D.G.       */
