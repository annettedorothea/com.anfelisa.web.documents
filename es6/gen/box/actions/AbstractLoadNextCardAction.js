import Action from "../../ace/AsynchronousAction";
import LoadNextCardCommand from "../../../src/box/commands/LoadNextCardCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractLoadNextCardAction extends Action {

    constructor(actionData) {
        super(actionData, 'box.LoadNextCardAction', false, false);
		this.postUpdateUI = this.postUpdateUI.bind(this);
    }

	getCommand() {
		return new LoadNextCardCommand(this.actionData);
	}

		preUpdateUI() {
			CommonView.displaySpinner(this.actionData);
		}
	
		postUpdateUI() {
			CommonView.hideSpinner(this.actionData);
		}

}

/*       S.D.G.       */
