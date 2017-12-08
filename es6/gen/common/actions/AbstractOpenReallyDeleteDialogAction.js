import Action from "../../ace/Action";
import OpenReallyDeleteDialogCommand from "../../../src/common/commands/OpenReallyDeleteDialogCommand";

export default class AbstractOpenReallyDeleteDialogAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'common.OpenReallyDeleteDialogAction', false);
    }

	getCommand() {
			return new OpenReallyDeleteDialogCommand(this.actionData);
	}

	
    preUpdateUI() {
    }

    postUpdateUI() {
    }

}

/*       S.D.G.       */
