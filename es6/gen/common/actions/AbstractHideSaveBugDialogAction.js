/********************************************************************************
 * generated by de.acegen 1.0.0
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import HideSaveBugDialogCommand from "../../../src/common/commands/HideSaveBugDialogCommand";

export default class AbstractHideSaveBugDialogAction extends Action {

    constructor() {
        super({}, 'common.HideSaveBugDialogAction');
	}
		
	getCommand() {
		return new HideSaveBugDialogCommand(this.actionData);
	}


}




/******* S.D.G. *******/



