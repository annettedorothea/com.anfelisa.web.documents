import Action from "../../ace/AsynchronousAction";
import LoadCategoriesCommand from "../../../src/author/commands/LoadCategoriesCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractLoadCategoriesAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'author.LoadCategoriesAction', false);
		this.postUpdateUI = this.postUpdateUI.bind(this);
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
