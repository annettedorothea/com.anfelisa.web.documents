import Action from "../../ace/AsynchronousAction";
import DeleteBoxCommand from "../../../src/box/commands/DeleteBoxCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractDeleteBoxAction extends Action {

    constructor(actionData) {
        super(actionData, 'box.DeleteBoxAction');
		this.postUpdateUI = this.postUpdateUI.bind(this);
    }

	getCommand() {
		return new DeleteBoxCommand(this.actionData);
	}

		preUpdateUI() {
			CommonView.displaySpinner(this.actionData);
		}
	
		postUpdateUI() {
			CommonView.hideSpinner(this.actionData);
		}

}

/*       S.D.G.       */
