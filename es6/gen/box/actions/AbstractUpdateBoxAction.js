import Action from "../../ace/AsynchronousAction";
import UpdateBoxCommand from "../../../src/box/commands/UpdateBoxCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractUpdateBoxAction extends Action {

    constructor() {
        super({}, 'box.UpdateBoxAction');
		this.postCall = this.postCall.bind(this);
    }
    
	getCommand() {
		return new UpdateBoxCommand(this.actionData);
	}

	preCall() {
		CommonView.displaySpinner(this.actionData);
	}
	
	postCall() {
		CommonView.hideSpinner(this.actionData);
	}

}

/*       S.D.G.       */
