/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import CallSaveBugCommand from "../../../src/common/commands/CallSaveBugCommand";

export default class AbstractCallSaveBugAction extends Action {

    constructor() {
        super({}, 'common.CallSaveBugAction');
	}
		
	getCommand() {
		return new CallSaveBugCommand(this.actionData);
	}


}




/******* S.D.G. *******/



