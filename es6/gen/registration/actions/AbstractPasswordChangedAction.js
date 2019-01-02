import Action from "../../ace/SynchronousAction";
import PasswordChangedCommand from "../../../src/registration/commands/PasswordChangedCommand";

export default class AbstractPasswordChangedAction extends Action {

    constructor( password, passwordRepetition) {
        super({password, passwordRepetition}, 'registration.PasswordChangedAction');
    }
    
	getCommand() {
		return new PasswordChangedCommand(this.actionData);
	}


}

/*       S.D.G.       */
