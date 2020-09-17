/********************************************************************************
 * generated by de.acegen 0.9.10
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import DeleteCardCommand from "../../../src/card/commands/DeleteCardCommand";
import * as AppState from "../../ace/AppState";

export default class AbstractDeleteCardAction extends Action {

    constructor() {
        super({}, 'card.DeleteCardAction');
		this.postCall = this.postCall.bind(this);
		}
		
	getCommand() {
		return new DeleteCardCommand(this.actionData);
	}

	preCall() {
		AppState.set_displaySpinner({displaySpinner: true});
	}
	
	postCall() {
		AppState.set_displaySpinner({displaySpinner: false});
	}

}




/******* S.D.G. *******/



