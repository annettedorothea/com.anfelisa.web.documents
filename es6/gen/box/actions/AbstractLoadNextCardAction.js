import Action from "../../ace/AsynchronousAction";
import LoadNextCardCommand from "../../../src/box/commands/LoadNextCardCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractLoadNextCardAction extends Action {

    constructor( boxId) {
        super({boxId}, 'box.LoadNextCardAction');
		this.postCall = this.postCall.bind(this);
    }
    
	getCommand() {
		return new LoadNextCardCommand(this.actionData);
	}

	preCall() {
		CommonView.displaySpinner(this.actionData);
	}
	
	postCall() {
		CommonView.hideSpinner(this.actionData);
	}

}

/*       S.D.G.       */
