import Action from "../../ace/Action";
import ReadPrivateTestCommand from "../../../src/navigation/commands/ReadPrivateTestCommand";

export default class AbstractReadPrivateTestAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'navigation.ReadPrivateTestAction', false);
    }

	getCommand() {
			return new ReadPrivateTestCommand(this.actionData);
	}

	
    preUpdateUI() {
    }

    postUpdateUI() {
    }

}

/*       S.D.G.       */
