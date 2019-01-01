import Action from "../../ace/SynchronousAction";
import SearchDuplicateCardsCommand from "../../../src/author/commands/SearchDuplicateCardsCommand";
import CategoriesView from "../../../src/author/views/CategoriesView";

export default class AbstractSearchDuplicateCardsAction extends Action {

    constructor() {
        super({}, 'author.SearchDuplicateCardsAction');
    }

	getCommand() {
		return new SearchDuplicateCardsCommand(this.actionData);
	}


}

/*       S.D.G.       */
