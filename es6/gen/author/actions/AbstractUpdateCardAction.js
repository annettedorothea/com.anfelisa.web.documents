import Action from "../../ace/AsynchronousAction";
import UpdateCardCommand from "../../../src/author/commands/UpdateCardCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractUpdateCardAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'author.UpdateCardAction', false);
		this.postUpdateUI = this.postUpdateUI.bind(this);
    }

	getCommand() {
		return new UpdateCardCommand(this.actionData);
	}

		preUpdateUI() {
			CommonView.displaySpinner(this.actionParam);
		}
	
		postUpdateUI() {
			CommonView.hideSpinner(this.actionParam);
		}

}

/*       S.D.G.       */
