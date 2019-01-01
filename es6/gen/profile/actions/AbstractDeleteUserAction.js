import Action from "../../ace/SynchronousAction";
import DeleteUserCommand from "../../../src/profile/commands/DeleteUserCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractDeleteUserAction extends Action {

    constructor() {
        super({}, 'profile.DeleteUserAction');
    }

	getCommand() {
		return new DeleteUserCommand(this.actionData);
	}


}

/*       S.D.G.       */
