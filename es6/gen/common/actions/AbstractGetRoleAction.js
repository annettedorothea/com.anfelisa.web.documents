import Action from "../../ace/Action";
import GetRoleCommand from "../../../src/common/commands/GetRoleCommand";

export default class AbstractGetRoleAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'common.GetRoleAction', false);
    }

	getCommand() {
		return new GetRoleCommand(this.actionData);
	}

	preUpdateUI() {
	}

	postUpdateUI() {
	}

}

/*       S.D.G.       */
