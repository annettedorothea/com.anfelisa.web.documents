import Action from "../../ace/Action";
import OpenProfileCommand from "../../../src/profile/commands/OpenProfileCommand";

export default class AbstractOpenProfileAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'profile.OpenProfileAction', false);
    }

	getCommand() {
			return new OpenProfileCommand(this.actionData);
	}

	
    preUpdateUI() {
    }

    postUpdateUI() {
    }

}

/*       S.D.G.       */
