import Action from "../../ace/Action";
import ReadPrivateCoursesCommand from "../../../src/navigation/commands/ReadPrivateCoursesCommand";

export default class AbstractReadPrivateCoursesAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'navigation.ReadPrivateCoursesAction', false);
    }

	getCommand() {
			return new ReadPrivateCoursesCommand(this.actionData);
	}

	
    preUpdateUI() {
    }

    postUpdateUI() {
    }

}

/*       S.D.G.       */
