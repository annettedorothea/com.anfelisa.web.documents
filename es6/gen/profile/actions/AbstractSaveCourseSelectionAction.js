import Action from "../../ace/Action";
import SaveCourseSelectionCommand from "../../../src/profile/commands/SaveCourseSelectionCommand";

export default class AbstractSaveCourseSelectionAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'profile.SaveCourseSelectionAction', false);
    }

	getCommand() {
			return new SaveCourseSelectionCommand(this.actionData);
	}

	
    preUpdateUI() {
    }

    postUpdateUI() {
    }

}

/*       S.D.G.       */
