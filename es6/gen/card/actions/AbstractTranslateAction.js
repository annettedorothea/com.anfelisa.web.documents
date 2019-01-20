import Action from "../../ace/AsynchronousAction";
import TranslateCommand from "../../../src/card/commands/TranslateCommand";
import * as AppState from "../../ace/AppState";

export default class AbstractTranslateAction extends Action {

    constructor() {
        super({}, 'card.TranslateAction');
		this.postCall = this.postCall.bind(this);
    }
    
	getCommand() {
		return new TranslateCommand(this.actionData);
	}

	preCall() {
		AppState.set_state_State_data_AuthorView_cardView_CardView_newCard_NewCard_displayTranslateSpinner({displayTranslateSpinner: true});
	}
	
	postCall() {
		AppState.set_state_State_data_AuthorView_cardView_CardView_newCard_NewCard_displayTranslateSpinner({displayTranslateSpinner: false});
	}

}

/*       S.D.G.       */
