import Action from "../../ace/Action";
import ReadPrivateLessonsCommand from "../../../src/navigation/commands/ReadPrivateLessonsCommand";

export default class AbstractReadPrivateLessonsAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'navigation.ReadPrivateLessonsAction', false);
    }

	getCommand() {
		return new ReadPrivateLessonsCommand(this.actionData);
	}

	preUpdateUI() {
	}

	postUpdateUI() {
	}

}

/*       S.D.G.       */
