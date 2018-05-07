import Action from "../../ace/Action";
import IndexOfNewCategoryChangedCommand from "../../../src/author/commands/IndexOfNewCategoryChangedCommand";

export default class AbstractIndexOfNewCategoryChangedAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'author.IndexOfNewCategoryChangedAction', false);
    }

	getCommand() {
		return new IndexOfNewCategoryChangedCommand(this.actionData);
	}

	preUpdateUI() {
	}

	postUpdateUI() {
	}

}

/*       S.D.G.       */
