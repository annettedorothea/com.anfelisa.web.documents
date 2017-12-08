import Action from "../../ace/Action";
import ReadPublicLessonsCommand from "../../../src/navigation/commands/ReadPublicLessonsCommand";

export default class AbstractReadPublicLessonsAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'navigation.ReadPublicLessonsAction', false);
    }

	getCommand() {
			return new ReadPublicLessonsCommand(this.actionData);
	}

	
    preUpdateUI() {
    }

    postUpdateUI() {
    }

}

/*       S.D.G.       */
