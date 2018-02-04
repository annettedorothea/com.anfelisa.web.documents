import Action from "../../ace/Action";
import LoadBoxCommand from "../../../src/profile/commands/LoadBoxCommand";

export default class AbstractLoadBoxAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'profile.LoadBoxAction', false);
    }

	getCommand() {
		return new LoadBoxCommand(this.actionData);
	}

	preUpdateUI() {
	}

	postUpdateUI() {
	}

}

/*       S.D.G.       */
