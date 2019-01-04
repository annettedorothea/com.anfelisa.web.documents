import Action from "../../ace/AsynchronousAction";
import CreateCardCommand from "../../../src/card/commands/CreateCardCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractCreateCardAction extends Action {

    constructor() {
        super({}, 'card.CreateCardAction');
		this.postCall = this.postCall.bind(this);
    }
    
	getCommand() {
		return new CreateCardCommand(this.actionData);
	}

	preCall() {
		CommonView.displaySpinner(this.actionData);
	}
	
	postCall() {
		CommonView.hideSpinner(this.actionData);
	}

}

/*       S.D.G.       */
