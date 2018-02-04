import Action from "../../ace/Action";
import CloseAllDialogsCommand from "../../../src/common/commands/CloseAllDialogsCommand";

export default class AbstractCloseAllDialogsAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'common.CloseAllDialogsAction', false);
    }

	getCommand() {
		return new CloseAllDialogsCommand(this.actionData);
	}

	preUpdateUI() {
	}

	postUpdateUI() {
	}

}

/*       S.D.G.       */
