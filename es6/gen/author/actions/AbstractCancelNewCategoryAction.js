import Action from "../../ace/Action";
import CancelNewCategoryCommand from "../../../src/author/commands/CancelNewCategoryCommand";

export default class AbstractCancelNewCategoryAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'author.CancelNewCategoryAction', false);
    }

	getCommand() {
		return new CancelNewCategoryCommand(this.actionData);
	}

	preUpdateUI() {
	}

	postUpdateUI() {
	}

}

/*       S.D.G.       */
