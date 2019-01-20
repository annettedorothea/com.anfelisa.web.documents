import Action from "../../ace/AsynchronousAction";
import ScoreReinforceCardCommand from "../../../src/box/commands/ScoreReinforceCardCommand";
import * as AppState from "../../ace/AppState";

export default class AbstractScoreReinforceCardAction extends Action {

    constructor( quality) {
        super({quality}, 'box.ScoreReinforceCardAction');
		this.postCall = this.postCall.bind(this);
    }
    
	getCommand() {
		return new ScoreReinforceCardCommand(this.actionData);
	}

	preCall() {
		AppState.set_state_State_displaySpinner({displaySpinner: true});
	}
	
	postCall() {
		AppState.set_state_State_displaySpinner({displaySpinner: false});
	}

}

/*       S.D.G.       */
