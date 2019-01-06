import Action from "../../ace/SynchronousAction";
import CloseInviteUserCommand from "../../../src/category/commands/CloseInviteUserCommand";

export default class AbstractCloseInviteUserAction extends Action {

    constructor() {
        super({}, 'category.CloseInviteUserAction');
    }
    
	getCommand() {
		return new CloseInviteUserCommand(this.actionData);
	}


}

/*       S.D.G.       */
