import Action from "../../ace/AsynchronousAction";
import UpdateBoxCommand from "../../../src/box/commands/UpdateBoxCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractUpdateBoxAction extends Action {

    constructor(actionData) {
        super(actionData, 'box.UpdateBoxAction', false);
		this.postUpdateUI = this.postUpdateUI.bind(this);
    }

	getCommand() {
		return new UpdateBoxCommand(this.actionData);
	}

		preUpdateUI() {
			CommonView.displaySpinner(this.actionData);
		}
	
		postUpdateUI() {
			CommonView.hideSpinner(this.actionData);
		}

}

/*       S.D.G.       */
