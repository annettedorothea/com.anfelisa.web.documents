import Action from "../../ace/AsynchronousAction";
import UpdateBoxCommand from "../../../src/box/commands/UpdateBoxCommand";

export default class AbstractUpdateBoxAction extends Action {

    constructor(actionData) {
        super(actionData, 'box.UpdateBoxAction', false);
		this.postUpdateUI = this.postUpdateUI.bind(this);
    }

	getCommand() {
		return new UpdateBoxCommand(this.actionData);
	}

		preUpdateUI() {
		}
	
		postUpdateUI() {
		}

}

/*       S.D.G.       */
