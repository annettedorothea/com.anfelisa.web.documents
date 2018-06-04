import Action from "../../ace/AsynchronousAction";
import LoadNextCardCommand from "../../../src/box/commands/LoadNextCardCommand";

export default class AbstractLoadNextCardAction extends Action {

    constructor(actionData) {
        super(actionData, 'box.LoadNextCardAction', false);
		this.postUpdateUI = this.postUpdateUI.bind(this);
    }

	getCommand() {
		return new LoadNextCardCommand(this.actionData);
	}

		preUpdateUI() {
		}
	
		postUpdateUI() {
		}

}

/*       S.D.G.       */
