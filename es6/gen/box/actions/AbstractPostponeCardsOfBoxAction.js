import Action from "../../ace/AsynchronousAction";
import PostponeCardsOfBoxCommand from "../../../src/box/commands/PostponeCardsOfBoxCommand";

export default class AbstractPostponeCardsOfBoxAction extends Action {

    constructor(actionData) {
        super(actionData, 'box.PostponeCardsOfBoxAction', false);
		this.postUpdateUI = this.postUpdateUI.bind(this);
    }

	getCommand() {
		return new PostponeCardsOfBoxCommand(this.actionData);
	}

		preUpdateUI() {
		}
	
		postUpdateUI() {
		}

}

/*       S.D.G.       */
