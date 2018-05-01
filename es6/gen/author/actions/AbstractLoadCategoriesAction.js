import Action from "../../ace/Action";
import LoadCategoriesCommand from "../../../src/author/commands/LoadCategoriesCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractLoadCategoriesAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'author.LoadCategoriesAction', false);
    }

	getCommand() {
		return new LoadCategoriesCommand(this.actionData);
	}

	preUpdateUI() {
		CommonView.displaySpinner(this.actionParam);
	}

	postUpdateUI() {
		CommonView.hideSpinner(this.actionParam);
	}

}

/*       S.D.G.       */
