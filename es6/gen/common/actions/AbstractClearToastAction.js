/********************************************************************************
 * generated by de.acegen 1.0.0
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import ClearToastCommand from "../../../src/common/commands/ClearToastCommand";

export default class AbstractClearToastAction extends Action {

    constructor() {
        super({}, 'common.ClearToastAction');
	}
		
	getCommand() {
		return new ClearToastCommand(this.actionData);
	}


}




/******* S.D.G. *******/



