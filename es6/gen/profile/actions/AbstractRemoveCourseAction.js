import Action from "../../ace/Action";
import RemoveCourseCommand from "../../../src/profile/commands/RemoveCourseCommand";

export default class AbstractRemoveCourseAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'profile.RemoveCourseAction', false);
    }

	getCommand() {
		return new RemoveCourseCommand(this.actionData);
	}

	preUpdateUI() {
	}

	postUpdateUI() {
	}

}

/*       S.D.G.       */
