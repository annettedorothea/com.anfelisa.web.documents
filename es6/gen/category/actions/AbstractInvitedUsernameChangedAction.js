import Action from "../../ace/SynchronousAction";
import InvitedUsernameChangedCommand from "../../../src/category/commands/InvitedUsernameChangedCommand";

export default class AbstractInvitedUsernameChangedAction extends Action {

    constructor( invitedUsername) {
        super({invitedUsername}, 'category.InvitedUsernameChangedAction');
    }
    
	getCommand() {
		return new InvitedUsernameChangedCommand(this.actionData);
	}


}

/*       S.D.G.       */
