import Action from "../../ace/Action";
import CreateCategoryCommand from "../../../src/author/commands/CreateCategoryCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractCreateCategoryAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'author.CreateCategoryAction', false);
    }

	getCommand() {
		return new CreateCategoryCommand(this.actionData);
	}

	preUpdateUI() {
		CommonView.displaySpinner(this.actionParam);
	}

	postUpdateUI() {
		CommonView.hideSpinner(this.actionParam);
	}

}

/*       S.D.G.       */
