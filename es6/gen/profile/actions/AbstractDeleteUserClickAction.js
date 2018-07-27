import Action from "../../ace/SynchronousAction";
import DeleteUserClickCommand from "../../../src/profile/commands/DeleteUserClickCommand";

export default class AbstractDeleteUserClickAction extends Action {

    constructor(actionData) {
        super(actionData, 'profile.DeleteUserClickAction');
    }

	getCommand() {
		return new DeleteUserClickCommand(this.actionData);
	}


}

/*       S.D.G.       */
