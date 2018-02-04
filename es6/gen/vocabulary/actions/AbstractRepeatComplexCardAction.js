import Action from "../../ace/Action";
import RepeatComplexCardCommand from "../../../src/vocabulary/commands/RepeatComplexCardCommand";

export default class AbstractRepeatComplexCardAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'vocabulary.RepeatComplexCardAction', false);
    }

	getCommand() {
		return new RepeatComplexCardCommand(this.actionData);
	}

	preUpdateUI() {
	}

	postUpdateUI() {
	}

}

/*       S.D.G.       */
