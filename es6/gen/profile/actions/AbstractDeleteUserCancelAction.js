/********************************************************************************
 * generated by de.acegen 0.9.10
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import DeleteUserCancelCommand from "../../../src/profile/commands/DeleteUserCancelCommand";

export default class AbstractDeleteUserCancelAction extends Action {

    constructor() {
        super({}, 'profile.DeleteUserCancelAction');
		}
		
	getCommand() {
		return new DeleteUserCancelCommand(this.actionData);
	}


}




/******* S.D.G. *******/



