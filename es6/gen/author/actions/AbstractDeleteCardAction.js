import Action from "../../ace/AsynchronousAction";
import DeleteCardCommand from "../../../src/author/commands/DeleteCardCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractDeleteCardAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'author.DeleteCardAction', false);
		this.postUpdateUI = this.postUpdateUI.bind(this);
    }

	getCommand() {
		return new DeleteCardCommand(this.actionData);
	}

		preUpdateUI() {
			CommonView.displaySpinner(this.actionParam);
		}
	
		postUpdateUI() {
			CommonView.hideSpinner(this.actionParam);
		}

}

/*       S.D.G.       */
