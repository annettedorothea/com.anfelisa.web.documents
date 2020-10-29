/********************************************************************************
 * generated by de.acegen 1.0.0
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import OnDragEnterCommand from "../../../src/card/commands/OnDragEnterCommand";

export default class AbstractOnDragEnterAction extends Action {

    constructor( dragTargetCardId) {
        super({dragTargetCardId}, 'card.OnDragEnterAction');
	}
		
	getCommand() {
		return new OnDragEnterCommand(this.actionData);
	}


}




/******* S.D.G. *******/



