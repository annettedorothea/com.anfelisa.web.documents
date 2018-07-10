import Action from "../../ace/AsynchronousAction";
import PostponeCardsOfBoxCommand from "../../../src/box/commands/PostponeCardsOfBoxCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractPostponeCardsOfBoxAction extends Action {

    constructor(actionData) {
        super(actionData, 'box.PostponeCardsOfBoxAction');
		this.postUpdateUI = this.postUpdateUI.bind(this);
    }

	getCommand() {
		return new PostponeCardsOfBoxCommand(this.actionData);
	}

		preUpdateUI() {
			CommonView.displaySpinner(this.actionData);
		}
	
		postUpdateUI() {
			CommonView.hideSpinner(this.actionData);
		}

}

/*       S.D.G.       */
