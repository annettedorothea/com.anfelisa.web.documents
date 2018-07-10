import Action from "../../ace/AsynchronousAction";
import LoadCategoriesCommand from "../../../src/author/commands/LoadCategoriesCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractLoadCategoriesAction extends Action {

    constructor(actionData) {
        super(actionData, 'author.LoadCategoriesAction');
		this.postUpdateUI = this.postUpdateUI.bind(this);
    }

	getCommand() {
		return new LoadCategoriesCommand(this.actionData);
	}

		preUpdateUI() {
			CommonView.displaySpinner(this.actionData);
		}
	
		postUpdateUI() {
			CommonView.hideSpinner(this.actionData);
		}

}

/*       S.D.G.       */
