import Action from "../../ace/AsynchronousAction";
import LoadBoxesCommand from "../../../src/box/commands/LoadBoxesCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractLoadBoxesAction extends Action {

    constructor() {
        super({}, 'box.LoadBoxesAction');
		this.postCall = this.postCall.bind(this);
    }

	getCommand() {
		return new LoadBoxesCommand(this.actionData);
	}

	preCall() {
		CommonView.displaySpinner(this.actionData);
	}
	
	postCall() {
		CommonView.hideSpinner(this.actionData);
	}

}

/*       S.D.G.       */
