import Action from "../../ace/Action";
import CreateCardCommand from "../../../src/author/commands/CreateCardCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractCreateCardAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'author.CreateCardAction', false);
    }

	getCommand() {
		return new CreateCardCommand(this.actionData);
	}

	preUpdateUI() {
		CommonView.displaySpinner(this.actionParam);
	}

	postUpdateUI() {
		CommonView.hideSpinner(this.actionParam);
	}

}

/*       S.D.G.       */
