import Action from "../../ace/Action";
import DeleteCategoryCommand from "../../../src/author/commands/DeleteCategoryCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractDeleteCategoryAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'author.DeleteCategoryAction', false);
    }

	getCommand() {
		return new DeleteCategoryCommand(this.actionData);
	}

	preUpdateUI() {
		CommonView.displaySpinner(this.actionParam);
	}

	postUpdateUI() {
		CommonView.hideSpinner(this.actionParam);
	}

}

/*       S.D.G.       */
