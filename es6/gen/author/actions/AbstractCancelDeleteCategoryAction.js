import Action from "../../ace/Action";
import CancelDeleteCategoryCommand from "../../../src/author/commands/CancelDeleteCategoryCommand";

export default class AbstractCancelDeleteCategoryAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'author.CancelDeleteCategoryAction', false);
    }

	getCommand() {
		return new CancelDeleteCategoryCommand(this.actionData);
	}

	preUpdateUI() {
	}

	postUpdateUI() {
	}

}

/*       S.D.G.       */
