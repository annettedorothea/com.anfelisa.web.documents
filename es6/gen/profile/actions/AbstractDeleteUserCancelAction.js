import Action from "../../ace/SynchronousAction";
import DeleteUserCancelCommand from "../../../src/profile/commands/DeleteUserCancelCommand";

export default class AbstractDeleteUserCancelAction extends Action {

    constructor(actionData) {
        super(actionData, 'profile.DeleteUserCancelAction');
    }

	getCommand() {
		return new DeleteUserCancelCommand(this.actionData);
	}


}

/*       S.D.G.       */
