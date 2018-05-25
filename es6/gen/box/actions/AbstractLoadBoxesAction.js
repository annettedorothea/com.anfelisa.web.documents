import Action from "../../ace/AsynchronousAction";
import LoadBoxesCommand from "../../../src/box/commands/LoadBoxesCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractLoadBoxesAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'box.LoadBoxesAction', false);
		this.postUpdateUI = this.postUpdateUI.bind(this);
    }

	getCommand() {
		return new LoadBoxesCommand(this.actionData);
	}

		preUpdateUI() {
			CommonView.displaySpinner(this.actionParam);
		}
	
		postUpdateUI() {
			CommonView.hideSpinner(this.actionParam);
		}

}

/*       S.D.G.       */
