import Action from "../../ace/AsynchronousAction";
import UpdateCategoryCommand from "../../../src/author/commands/UpdateCategoryCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractUpdateCategoryAction extends Action {

    constructor(actionData) {
        super(actionData, 'author.UpdateCategoryAction', false, false);
		this.postUpdateUI = this.postUpdateUI.bind(this);
    }

	getCommand() {
		return new UpdateCategoryCommand(this.actionData);
	}

		preUpdateUI() {
			CommonView.displaySpinner(this.actionData);
		}
	
		postUpdateUI() {
			CommonView.hideSpinner(this.actionData);
		}

}

/*       S.D.G.       */
