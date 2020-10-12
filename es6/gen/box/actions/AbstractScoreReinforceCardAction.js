/********************************************************************************
 * generated by de.acegen 0.9.12
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import ScoreReinforceCardCommand from "../../../src/box/commands/ScoreReinforceCardCommand";
import * as AppState from "../../ace/AppState";

export default class AbstractScoreReinforceCardAction extends Action {

    constructor( scoredCardQuality) {
        super({scoredCardQuality}, 'box.ScoreReinforceCardAction');
		this.postCall = this.postCall.bind(this);
	}
		
	getCommand() {
		return new ScoreReinforceCardCommand(this.actionData);
	}

	preCall() {
		AppState.set_displaySpinner({displaySpinner: true});
	}
	
	postCall() {
		AppState.set_displaySpinner({displaySpinner: false});
	}

}




/******* S.D.G. *******/



