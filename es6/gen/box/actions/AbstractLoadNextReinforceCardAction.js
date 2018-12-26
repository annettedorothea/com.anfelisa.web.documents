import Action from "../../ace/SynchronousAction";
import LoadNextReinforceCardCommand from "../../../src/box/commands/LoadNextReinforceCardCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractLoadNextReinforceCardAction extends Action {

    constructor(actionData) {
        super(actionData, 'box.LoadNextReinforceCardAction');
    }

	getCommand() {
		return new LoadNextReinforceCardCommand(this.actionData);
	}


}

/*       S.D.G.       */
