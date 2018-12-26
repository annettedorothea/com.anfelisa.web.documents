import Action from "../../ace/AsynchronousAction";
import CreateBoxCommand from "../../../src/box/commands/CreateBoxCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractCreateBoxAction extends Action {

    constructor(actionData) {
        super(actionData, 'box.CreateBoxAction');
		this.postCall = this.postCall.bind(this);
    }

	getCommand() {
		return new CreateBoxCommand(this.actionData);
	}

		preCall() {
			CommonView.displaySpinner(this.actionData);
		}
	
		postCall() {
			CommonView.hideSpinner(this.actionData);
		}

}

/*       S.D.G.       */
