import Action from "../../ace/SynchronousAction";
import InviteUserCommand from "../../../src/author/commands/InviteUserCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractInviteUserAction extends Action {

    constructor(actionData) {
        super(actionData, 'author.InviteUserAction');
    }

	getCommand() {
		return new InviteUserCommand(this.actionData);
	}


}

/*       S.D.G.       */
