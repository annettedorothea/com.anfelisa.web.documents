import Action from "../../ace/AsynchronousAction";
import LoadCardsCommand from "../../../src/card/commands/LoadCardsCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractLoadCardsAction extends Action {

    constructor( categoryId) {
        super({categoryId}, 'card.LoadCardsAction');
		this.postCall = this.postCall.bind(this);
    }
    
	getCommand() {
		return new LoadCardsCommand(this.actionData);
	}

	preCall() {
		CommonView.displaySpinner(this.actionData);
	}
	
	postCall() {
		CommonView.hideSpinner(this.actionData);
	}

}

/*       S.D.G.       */
