import Action from "../../ace/AsynchronousAction";
import LoadNextReinforceCardCommand from "../../../src/box/commands/LoadNextReinforceCardCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractLoadNextReinforceCardAction extends Action {

    constructor(actionData) {
        super(actionData, 'box.LoadNextReinforceCardAction', false, false);
		this.postUpdateUI = this.postUpdateUI.bind(this);
    }

	getCommand() {
		return new LoadNextReinforceCardCommand(this.actionData);
	}

		preUpdateUI() {
			CommonView.displaySpinner(this.actionData);
		}
	
		postUpdateUI() {
			CommonView.hideSpinner(this.actionData);
		}

}

/*       S.D.G.       */
