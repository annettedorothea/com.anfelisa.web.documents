import Action from "../../ace/Action";
import LogoutCommand from "../../../src/common/commands/LogoutCommand";

export default class AbstractLogoutAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'common.LogoutAction', false);
    }

	getCommand() {
			return new LogoutCommand(this.actionData);
	}

	
    preUpdateUI() {
    }

    postUpdateUI() {
    }

}

/*       S.D.G.       */
