import Action from "../../ace/AsynchronousAction";
import DeleteUserCommand from "../../../src/profile/commands/DeleteUserCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractDeleteUserAction extends Action {

    constructor( usernameToBeDeleted) {
        super({usernameToBeDeleted}, 'profile.DeleteUserAction');
		this.postCall = this.postCall.bind(this);
    }
    
	getCommand() {
		return new DeleteUserCommand(this.actionData);
	}

	preCall() {
		CommonView.displaySpinner(this.actionData);
	}
	
	postCall() {
		CommonView.hideSpinner(this.actionData);
	}

}

/*       S.D.G.       */
