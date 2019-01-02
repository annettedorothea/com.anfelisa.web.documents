import Action from "../../ace/AsynchronousAction";
import PostponeCardsOfBoxCommand from "../../../src/box/commands/PostponeCardsOfBoxCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractPostponeCardsOfBoxAction extends Action {

    constructor( boxId) {
        super({boxId}, 'box.PostponeCardsOfBoxAction');
		this.postCall = this.postCall.bind(this);
    }
    
	getCommand() {
		return new PostponeCardsOfBoxCommand(this.actionData);
	}

	preCall() {
		CommonView.displaySpinner(this.actionData);
	}
	
	postCall() {
		CommonView.hideSpinner(this.actionData);
	}

}

/*       S.D.G.       */
