import Action from "../../ace/Action";
import LoadCardsCommand from "../../../src/author/commands/LoadCardsCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractLoadCardsAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'author.LoadCardsAction', false);
    }

	getCommand() {
		return new LoadCardsCommand(this.actionData);
	}

	preUpdateUI() {
		CommonView.displaySpinner(this.actionParam);
	}

	postUpdateUI() {
		CommonView.hideSpinner(this.actionParam);
	}

}

/*       S.D.G.       */
