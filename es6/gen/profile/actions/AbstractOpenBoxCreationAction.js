import Action from "../../ace/Action";
import OpenBoxCreationCommand from "../../../src/profile/commands/OpenBoxCreationCommand";

export default class AbstractOpenBoxCreationAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'profile.OpenBoxCreationAction', false);
    }

	getCommand() {
			return new OpenBoxCreationCommand(this.actionData);
	}

	
    preUpdateUI() {
    }

    postUpdateUI() {
    }

}

/*       S.D.G.       */
