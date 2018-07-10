import Action from "../../ace/AsynchronousAction";
import DeleteCardCommand from "../../../src/author/commands/DeleteCardCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractDeleteCardAction extends Action {

    constructor(actionData) {
        super(actionData, 'author.DeleteCardAction');
		this.postUpdateUI = this.postUpdateUI.bind(this);
    }

	getCommand() {
		return new DeleteCardCommand(this.actionData);
	}

		preUpdateUI() {
			CommonView.displaySpinner(this.actionData);
		}
	
		postUpdateUI() {
			CommonView.hideSpinner(this.actionData);
		}

}

/*       S.D.G.       */
