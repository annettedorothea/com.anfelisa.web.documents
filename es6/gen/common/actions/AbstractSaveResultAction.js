import Action from "../../ace/Action";
import SaveResultCommand from "../../../src/common/commands/SaveResultCommand";

export default class AbstractSaveResultAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'common.SaveResultAction', false);
    }

	getCommand() {
			return new SaveResultCommand(this.actionData);
	}

	
    preUpdateUI() {
    }

    postUpdateUI() {
    }

}

/*       S.D.G.       */
