import Action from "../../ace/SynchronousAction";
import ToggleSaveInLocalStorageCommand from "../../../src/common/commands/ToggleSaveInLocalStorageCommand";

export default class AbstractToggleSaveInLocalStorageAction extends Action {

    constructor(actionData) {
        super(actionData, 'common.ToggleSaveInLocalStorageAction');
    }

	getCommand() {
		return new ToggleSaveInLocalStorageCommand(this.actionData);
	}


}

/*       S.D.G.       */
