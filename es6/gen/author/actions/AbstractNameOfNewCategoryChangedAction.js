import Action from "../../ace/Action";
import NameOfNewCategoryChangedCommand from "../../../src/author/commands/NameOfNewCategoryChangedCommand";

export default class AbstractNameOfNewCategoryChangedAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'author.NameOfNewCategoryChangedAction', false);
    }

	getCommand() {
		return new NameOfNewCategoryChangedCommand(this.actionData);
	}

	preUpdateUI() {
	}

	postUpdateUI() {
	}

}

/*       S.D.G.       */
