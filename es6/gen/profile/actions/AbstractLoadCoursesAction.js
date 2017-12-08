import Action from "../../ace/Action";
import LoadCoursesCommand from "../../../src/profile/commands/LoadCoursesCommand";

export default class AbstractLoadCoursesAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'profile.LoadCoursesAction', false);
    }

	getCommand() {
			return new LoadCoursesCommand(this.actionData);
	}

	
    preUpdateUI() {
    }

    postUpdateUI() {
    }

}

/*       S.D.G.       */
