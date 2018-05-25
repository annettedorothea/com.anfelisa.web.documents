import Action from "../../ace/AsynchronousAction";
import LoadRootCategoriesCommand from "../../../src/box/commands/LoadRootCategoriesCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractLoadRootCategoriesAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'box.LoadRootCategoriesAction', false);
		this.postUpdateUI = this.postUpdateUI.bind(this);
    }

	getCommand() {
		return new LoadRootCategoriesCommand(this.actionData);
	}

		preUpdateUI() {
			CommonView.displaySpinner(this.actionParam);
		}
	
		postUpdateUI() {
			CommonView.hideSpinner(this.actionParam);
		}

}

/*       S.D.G.       */
