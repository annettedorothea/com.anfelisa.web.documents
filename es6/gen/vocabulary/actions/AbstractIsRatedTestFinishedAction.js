import Action from "../../ace/Action";
import IsRatedTestFinishedCommand from "../../../src/vocabulary/commands/IsRatedTestFinishedCommand";

export default class AbstractIsRatedTestFinishedAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'vocabulary.IsRatedTestFinishedAction', false);
    }

	getCommand() {
			return new IsRatedTestFinishedCommand(this.actionData);
	}

	
    preUpdateUI() {
    }

    postUpdateUI() {
    }

}

/*       S.D.G.       */
