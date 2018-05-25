import Action from "../../ace/AsynchronousAction";
import CreateBoxCommand from "../../../src/box/commands/CreateBoxCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractCreateBoxAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'box.CreateBoxAction', false);
		this.postUpdateUI = this.postUpdateUI.bind(this);
    }

	getCommand() {
		return new CreateBoxCommand(this.actionData);
	}

		preUpdateUI() {
			CommonView.displaySpinner(this.actionParam);
		}
	
		postUpdateUI() {
			CommonView.hideSpinner(this.actionParam);
		}

}

/*       S.D.G.       */
