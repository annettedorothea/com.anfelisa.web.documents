import Action from "../../ace/AsynchronousAction";
import LoadNextReinforceCardCommand from "../../../src/box/commands/LoadNextReinforceCardCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractLoadNextReinforceCardAction extends Action {

    constructor( boxId) {
        super({boxId}, 'box.LoadNextReinforceCardAction');
		this.postCall = this.postCall.bind(this);
    }
    
	getCommand() {
		return new LoadNextReinforceCardCommand(this.actionData);
	}

	preCall() {
		CommonView.displaySpinner(this.actionData);
	}
	
	postCall() {
		CommonView.hideSpinner(this.actionData);
	}

}

/*       S.D.G.       */
