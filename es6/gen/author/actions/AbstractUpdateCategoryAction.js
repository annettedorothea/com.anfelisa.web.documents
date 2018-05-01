import Action from "../../ace/Action";
import UpdateCategoryCommand from "../../../src/author/commands/UpdateCategoryCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractUpdateCategoryAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'author.UpdateCategoryAction', false);
    }

	getCommand() {
		return new UpdateCategoryCommand(this.actionData);
	}

	preUpdateUI() {
		CommonView.displaySpinner(this.actionParam);
	}

	postUpdateUI() {
		CommonView.hideSpinner(this.actionParam);
	}

}

/*       S.D.G.       */
