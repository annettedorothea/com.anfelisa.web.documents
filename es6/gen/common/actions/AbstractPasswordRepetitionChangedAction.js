import Action from "../../ace/SynchronousAction";
import PasswordRepetitionChangedCommand from "../../../src/common/commands/PasswordRepetitionChangedCommand";

export default class AbstractPasswordRepetitionChangedAction extends Action {

    constructor(actionData) {
        super(actionData, 'common.PasswordRepetitionChangedAction');
    }

	getCommand() {
		return new PasswordRepetitionChangedCommand(this.actionData);
	}


}

/*       S.D.G.       */
