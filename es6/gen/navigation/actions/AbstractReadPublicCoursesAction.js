import Action from "../../ace/Action";
import ReadPublicCoursesCommand from "../../../src/navigation/commands/ReadPublicCoursesCommand";

export default class AbstractReadPublicCoursesAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'navigation.ReadPublicCoursesAction', false);
    }

	getCommand() {
		return new ReadPublicCoursesCommand(this.actionData);
	}

	preUpdateUI() {
	}

	postUpdateUI() {
	}

}

/*       S.D.G.       */
