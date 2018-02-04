import Action from "../../ace/Action";
import DeleteBoxCommand from "../../../src/profile/commands/DeleteBoxCommand";

export default class AbstractDeleteBoxAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'profile.DeleteBoxAction', false);
    }

	getCommand() {
		return new DeleteBoxCommand(this.actionData);
	}

	preUpdateUI() {
	}

	postUpdateUI() {
	}

}

/*       S.D.G.       */
