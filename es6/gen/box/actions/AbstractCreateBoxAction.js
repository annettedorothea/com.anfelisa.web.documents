import Action from "../../ace/AsynchronousAction";
import CreateBoxCommand from "../../../src/box/commands/CreateBoxCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractCreateBoxAction extends Action {

    constructor(actionData) {
        super(actionData, 'box.CreateBoxAction', false, false);
		this.postUpdateUI = this.postUpdateUI.bind(this);
    }

	getCommand() {
		return new CreateBoxCommand(this.actionData);
	}

		preUpdateUI() {
			CommonView.displaySpinner(this.actionData);
		}
	
		postUpdateUI() {
			CommonView.hideSpinner(this.actionData);
		}

}

/*       S.D.G.       */
