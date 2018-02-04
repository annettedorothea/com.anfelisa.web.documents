import Action from "../../ace/Action";
import OpenCourseSelectionCommand from "../../../src/profile/commands/OpenCourseSelectionCommand";

export default class AbstractOpenCourseSelectionAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'profile.OpenCourseSelectionAction', false);
    }

	getCommand() {
		return new OpenCourseSelectionCommand(this.actionData);
	}

	preUpdateUI() {
	}

	postUpdateUI() {
	}

}

/*       S.D.G.       */
