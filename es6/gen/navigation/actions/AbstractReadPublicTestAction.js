import Action from "../../ace/Action";
import ReadPublicTestCommand from "../../../src/navigation/commands/ReadPublicTestCommand";

export default class AbstractReadPublicTestAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'navigation.ReadPublicTestAction', false);
    }

	getCommand() {
			return new ReadPublicTestCommand(this.actionData);
	}

	
    preUpdateUI() {
    }

    postUpdateUI() {
    }

}

/*       S.D.G.       */
