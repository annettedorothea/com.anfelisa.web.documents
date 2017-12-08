import Action from "../../ace/Action";
import CorrectWordCommand from "../../../src/vocabulary/commands/CorrectWordCommand";

export default class AbstractCorrectWordAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'vocabulary.CorrectWordAction', false);
    }

	getCommand() {
			return new CorrectWordCommand(this.actionData);
	}

	
    preUpdateUI() {
    }

    postUpdateUI() {
    }

}

/*       S.D.G.       */
