/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import ScoreCardCommand from "../../../src/box/commands/ScoreCardCommand";
import * as AppState from "../../ace/AppState";

export default class AbstractScoreCardAction extends Action {

    constructor( scoredCardQuality) {
        super({scoredCardQuality}, 'box.ScoreCardAction');
		this.postCall = this.postCall.bind(this);
	}
		
	getCommand() {
		return new ScoreCardCommand(this.actionData);
	}

	preCall() {
		AppState.set_displaySpinner({displaySpinner: true});
	}
	
	postCall() {
		AppState.set_displaySpinner({displaySpinner: false});
	}

}




/******* S.D.G. *******/



