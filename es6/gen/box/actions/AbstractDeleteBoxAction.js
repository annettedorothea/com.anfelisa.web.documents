import Action from "../../ace/AsynchronousAction";
import DeleteBoxCommand from "../../../src/box/commands/DeleteBoxCommand";

export default class AbstractDeleteBoxAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'box.DeleteBoxAction', false);
		this.postUpdateUI = this.postUpdateUI.bind(this);
    }

	getCommand() {
		return new DeleteBoxCommand(this.actionData);
	}

		preUpdateUI() {
		}
	
		postUpdateUI() {
		}

}

/*       S.D.G.       */
