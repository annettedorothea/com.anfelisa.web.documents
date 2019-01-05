import Action from "../../ace/AsynchronousAction";
import MoveCardsCommand from "../../../src/card/commands/MoveCardsCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractMoveCardsAction extends Action {

    constructor() {
        super({}, 'card.MoveCardsAction');
		this.postCall = this.postCall.bind(this);
    }
    
	getCommand() {
		return new MoveCardsCommand(this.actionData);
	}

	preCall() {
		CommonView.displaySpinner(this.actionData);
	}
	
	postCall() {
		CommonView.hideSpinner(this.actionData);
	}

}

/*       S.D.G.       */
