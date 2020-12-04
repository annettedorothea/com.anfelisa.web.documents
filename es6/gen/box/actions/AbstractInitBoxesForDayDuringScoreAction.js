/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import InitBoxesForDayDuringScoreCommand from "../../../src/box/commands/InitBoxesForDayDuringScoreCommand";
import * as AppState from "../../ace/AppState";

export default class AbstractInitBoxesForDayDuringScoreAction extends Action {

    constructor() {
        super({}, 'box.InitBoxesForDayDuringScoreAction');
		this.postCall = this.postCall.bind(this);
	}
		
	getCommand() {
		return new InitBoxesForDayDuringScoreCommand(this.actionData);
	}

	preCall() {
		AppState.set_displaySpinner({displaySpinner: true});
	}
	
	postCall() {
		AppState.set_displaySpinner({displaySpinner: false});
	}

}




/******* S.D.G. *******/



