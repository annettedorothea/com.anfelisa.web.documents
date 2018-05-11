import Action from "../../ace/AsynchronousAction";
import SearchDuplicateCardsCommand from "../../../src/author/commands/SearchDuplicateCardsCommand";
import CategoriesView from "../../../src/author/views/CategoriesView";

export default class AbstractSearchDuplicateCardsAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'author.SearchDuplicateCardsAction', false);
		this.postUpdateUI = this.postUpdateUI.bind(this);
    }

	getCommand() {
		return new SearchDuplicateCardsCommand(this.actionData);
	}

		preUpdateUI() {
			CategoriesView.displayNewCardSpinner(this.actionParam);
		}
	
		postUpdateUI() {
			CategoriesView.hideNewCardSpinner(this.actionParam);
		}

}

/*       S.D.G.       */
