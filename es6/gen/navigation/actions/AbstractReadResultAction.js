import Action from "../../ace/Action";
import ReadResultCommand from "../../../src/navigation/commands/ReadResultCommand";

export default class AbstractReadResultAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'navigation.ReadResultAction', false);
    }

	getCommand() {
		return new ReadResultCommand(this.actionData);
	}

	preUpdateUI() {
	}

	postUpdateUI() {
	}

}

/*       S.D.G.       */
