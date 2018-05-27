import Action from "../../ace/AsynchronousAction";
import LoadBoxesCommand from "../../../src/box/commands/LoadBoxesCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractLoadBoxesAction extends Action {

    constructor(actionData) {
        super(actionData, 'box.LoadBoxesAction', false);
		this.postUpdateUI = this.postUpdateUI.bind(this);
    }

	getCommand() {
		return new LoadBoxesCommand(this.actionData);
	}

		preUpdateUI() {
			CommonView.displaySpinner(this.actionData);
		}
	
		postUpdateUI() {
			CommonView.hideSpinner(this.actionData);
		}

}

/*       S.D.G.       */
