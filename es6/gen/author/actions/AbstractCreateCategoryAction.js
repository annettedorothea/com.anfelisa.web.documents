import Action from "../../ace/AsynchronousAction";
import CreateCategoryCommand from "../../../src/author/commands/CreateCategoryCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractCreateCategoryAction extends Action {

    constructor(actionData) {
        super(actionData, 'author.CreateCategoryAction');
		this.postUpdateUI = this.postUpdateUI.bind(this);
    }

	getCommand() {
		return new CreateCategoryCommand(this.actionData);
	}

		preUpdateUI() {
			CommonView.displaySpinner(this.actionData);
		}
	
		postUpdateUI() {
			CommonView.hideSpinner(this.actionData);
		}

}

/*       S.D.G.       */
