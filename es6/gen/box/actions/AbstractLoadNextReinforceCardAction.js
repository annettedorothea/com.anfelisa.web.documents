import Action from "../../ace/AsynchronousAction";
import LoadNextReinforceCardCommand from "../../../src/box/commands/LoadNextReinforceCardCommand";

export default class AbstractLoadNextReinforceCardAction extends Action {

    constructor(actionData) {
        super(actionData, 'box.LoadNextReinforceCardAction', false);
		this.postUpdateUI = this.postUpdateUI.bind(this);
    }

	getCommand() {
		return new LoadNextReinforceCardCommand(this.actionData);
	}

		preUpdateUI() {
		}
	
		postUpdateUI() {
		}

}

/*       S.D.G.       */
