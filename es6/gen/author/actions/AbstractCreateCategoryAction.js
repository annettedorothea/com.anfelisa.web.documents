import Action from "../../ace/AsynchronousAction";
import CreateCategoryCommand from "../../../src/author/commands/CreateCategoryCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractCreateCategoryAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'author.CreateCategoryAction', false);
		this.postUpdateUI = this.postUpdateUI.bind(this);
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
