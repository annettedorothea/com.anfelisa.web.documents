import Action from "../../ace/AsynchronousAction";
import SearchDuplicateCardsCommand from "../../../src/author/commands/SearchDuplicateCardsCommand";
import CategoriesView from "../../../src/author/views/CategoriesView";

export default class AbstractSearchDuplicateCardsAction extends Action {

    constructor(actionData) {
        super(actionData, 'author.SearchDuplicateCardsAction');
		this.postUpdateUI = this.postUpdateUI.bind(this);
    }

	getCommand() {
		return new SearchDuplicateCardsCommand(this.actionData);
	}

		preUpdateUI() {
			CategoriesView.displayNewCardSpinner(this.actionData);
		}
	
		postUpdateUI() {
			CategoriesView.hideNewCardSpinner(this.actionData);
		}

}

/*       S.D.G.       */
