import Action from "../../ace/Action";
import ReadPrivateTestsCommand from "../../../src/navigation/commands/ReadPrivateTestsCommand";

export default class AbstractReadPrivateTestsAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'navigation.ReadPrivateTestsAction', false);
    }

	getCommand() {
		return new ReadPrivateTestsCommand(this.actionData);
	}

	preUpdateUI() {
	}

	postUpdateUI() {
	}

}

/*       S.D.G.       */
