import Action from "../../ace/SynchronousAction";
import UsernameForgotPasswordChangedCommand from "../../../src/password/commands/UsernameForgotPasswordChangedCommand";

export default class AbstractUsernameForgotPasswordChangedAction extends Action {

    constructor( username) {
        super({username}, 'password.UsernameForgotPasswordChangedAction');
    }
    
	getCommand() {
		return new UsernameForgotPasswordChangedCommand(this.actionData);
	}


}

/*       S.D.G.       */
