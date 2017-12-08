import Action from "../../ace/Action";
import ReadPublicTestsCommand from "../../../src/navigation/commands/ReadPublicTestsCommand";

export default class AbstractReadPublicTestsAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'navigation.ReadPublicTestsAction', false);
    }

	getCommand() {
			return new ReadPublicTestsCommand(this.actionData);
	}

	
    preUpdateUI() {
    }

    postUpdateUI() {
    }

}

/*       S.D.G.       */
