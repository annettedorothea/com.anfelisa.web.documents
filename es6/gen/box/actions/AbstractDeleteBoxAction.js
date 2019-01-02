import Action from "../../ace/AsynchronousAction";
import DeleteBoxCommand from "../../../src/box/commands/DeleteBoxCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractDeleteBoxAction extends Action {

    constructor( boxId) {
        super({boxId}, 'box.DeleteBoxAction');
		this.postCall = this.postCall.bind(this);
    }
    
	getCommand() {
		return new DeleteBoxCommand(this.actionData);
	}

	preCall() {
		CommonView.displaySpinner(this.actionData);
	}
	
	postCall() {
		CommonView.hideSpinner(this.actionData);
	}

}

/*       S.D.G.       */
