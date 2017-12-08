import Action from "../../ace/Action";
import StartTestCommand from "../../../src/vocabulary/commands/StartTestCommand";

export default class AbstractStartTestAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'vocabulary.StartTestAction', false);
    }

	getCommand() {
			return new StartTestCommand(this.actionData);
	}

	
    preUpdateUI() {
    }

    postUpdateUI() {
    }

}

/*       S.D.G.       */
