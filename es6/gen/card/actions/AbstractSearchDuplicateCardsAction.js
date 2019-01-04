import Action from "../../ace/AsynchronousAction";
import SearchDuplicateCardsCommand from "../../../src/card/commands/SearchDuplicateCardsCommand";
import CardListView from "../../../src/card/views/CardListView";

export default class AbstractSearchDuplicateCardsAction extends Action {

    constructor() {
        super({}, 'card.SearchDuplicateCardsAction');
		this.postCall = this.postCall.bind(this);
    }
    
	getCommand() {
		return new SearchDuplicateCardsCommand(this.actionData);
	}

	preCall() {
		CardListView.displayNewCardSpinner(this.actionData);
	}
	
	postCall() {
		CardListView.hideNewCardSpinner(this.actionData);
	}

}

/*       S.D.G.       */
