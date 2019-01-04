import Action from "../../ace/AsynchronousAction";
import DeleteCardCommand from "../../../src/card/commands/DeleteCardCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractDeleteCardAction extends Action {

    constructor() {
        super({}, 'card.DeleteCardAction');
		this.postCall = this.postCall.bind(this);
    }
    
	getCommand() {
		return new DeleteCardCommand(this.actionData);
	}

	preCall() {
		CommonView.displaySpinner(this.actionData);
	}
	
	postCall() {
		CommonView.hideSpinner(this.actionData);
	}

}

/*       S.D.G.       */
