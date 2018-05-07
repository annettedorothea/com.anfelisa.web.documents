import Action from "../../ace/Action";
import IndexOfEditedCategoryChangedCommand from "../../../src/author/commands/IndexOfEditedCategoryChangedCommand";

export default class AbstractIndexOfEditedCategoryChangedAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'author.IndexOfEditedCategoryChangedAction', false);
    }

	getCommand() {
		return new IndexOfEditedCategoryChangedCommand(this.actionData);
	}

	preUpdateUI() {
	}

	postUpdateUI() {
	}

}

/*       S.D.G.       */
