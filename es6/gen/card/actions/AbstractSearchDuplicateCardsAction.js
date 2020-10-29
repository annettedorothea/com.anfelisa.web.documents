/********************************************************************************
 * generated by de.acegen 1.0.0
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import SearchDuplicateCardsCommand from "../../../src/card/commands/SearchDuplicateCardsCommand";
import * as AppState from "../../ace/AppState";

export default class AbstractSearchDuplicateCardsAction extends Action {

    constructor() {
        super({}, 'card.SearchDuplicateCardsAction');
		this.postCall = this.postCall.bind(this);
	}
		
	getCommand() {
		return new SearchDuplicateCardsCommand(this.actionData);
	}

	preCall() {
		AppState.set_authorView_cardView_newCard_displaySpinner({displaySpinner: true});
	}
	
	postCall() {
		AppState.set_authorView_cardView_newCard_displaySpinner({displaySpinner: false});
	}

}




/******* S.D.G. *******/



