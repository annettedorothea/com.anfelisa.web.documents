import Action from "../../ace/AsynchronousAction";
import UpdateCardCommand from "../../../src/card/commands/UpdateCardCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractUpdateCardAction extends Action {

    constructor() {
        super({}, 'card.UpdateCardAction');
		this.postCall = this.postCall.bind(this);
    }
    
	getCommand() {
		return new UpdateCardCommand(this.actionData);
	}

	preCall() {
		CommonView.displaySpinner(this.actionData);
	}
	
	postCall() {
		CommonView.hideSpinner(this.actionData);
	}

}

/*       S.D.G.       */
