import Action from "../../ace/Action";
import IsTestFinishedCommand from "../../../src/vocabulary/commands/IsTestFinishedCommand";

export default class AbstractIsTestFinishedAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'vocabulary.IsTestFinishedAction', false);
    }

	getCommand() {
		return new IsTestFinishedCommand(this.actionData);
	}

	preUpdateUI() {
	}

	postUpdateUI() {
	}

}

/*       S.D.G.       */
