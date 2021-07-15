/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import UpdateCardPriorityCommand from "../../../src/card/commands/UpdateCardPriorityCommand";
import * as AppState from "../../ace/AppState";
import * as AppUtils from "../../../src/app/AppUtils";

export default class AbstractUpdateCardPriorityAction extends Action {

    constructor() {
        super('card.UpdateCardPriorityAction');
		this.postCall = this.postCall.bind(this);
	}
		
	getCommand() {
		return new UpdateCardPriorityCommand();
	}

	preCall() {
		AppState.set_rootContainer_spinner_display({display: true});
		AppUtils.stateUpdated(AppState.getAppState());
	}
	
	postCall() {
		AppState.set_rootContainer_spinner_display({display: false});
		AppUtils.stateUpdated(AppState.getAppState());
	}

}




/******* S.D.G. *******/



