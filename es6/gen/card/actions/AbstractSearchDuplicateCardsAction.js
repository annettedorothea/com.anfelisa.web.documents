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
		AppState.set_state_State_data_AuthorView_cardView_CardView_newCard_NewCard_displaySpinner({displaySpinner: true});
	}
	
	postCall() {
		AppState.set_state_State_data_AuthorView_cardView_CardView_newCard_NewCard_displaySpinner({displaySpinner: false});
	}

}

/*       S.D.G.       */
