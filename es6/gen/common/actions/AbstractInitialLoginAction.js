import Action from "../../ace/AsynchronousAction";
import InitialLoginCommand from "../../../src/common/commands/InitialLoginCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractInitialLoginAction extends Action {

    constructor(actionData) {
        super(actionData, 'common.InitialLoginAction', false);
		this.postUpdateUI = this.postUpdateUI.bind(this);
    }

	getCommand() {
		return new InitialLoginCommand(this.actionData);
	}

		preUpdateUI() {
			CommonView.displaySpinner(this.actionData);
		}
	
		postUpdateUI() {
			CommonView.hideSpinner(this.actionData);
		}

}

/*       S.D.G.       */
