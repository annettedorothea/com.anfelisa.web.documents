/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import UsernameChangedCommand from "../../../src/login/commands/UsernameChangedCommand";

export default class AbstractUsernameChangedAction extends Action {

    constructor() {
        super('login.UsernameChangedAction');
	}
		
	getCommand() {
		return new UsernameChangedCommand();
	}


}




/******* S.D.G. *******/



