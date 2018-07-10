import Action from "../../ace/AsynchronousAction";
import CreateCardCommand from "../../../src/author/commands/CreateCardCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractCreateCardAction extends Action {

    constructor(actionData) {
        super(actionData, 'author.CreateCardAction', false, false);
		this.postUpdateUI = this.postUpdateUI.bind(this);
    }

	getCommand() {
		return new CreateCardCommand(this.actionData);
	}

		preUpdateUI() {
			CommonView.displaySpinner(this.actionData);
		}
	
		postUpdateUI() {
			CommonView.hideSpinner(this.actionData);
		}

}

/*       S.D.G.       */
