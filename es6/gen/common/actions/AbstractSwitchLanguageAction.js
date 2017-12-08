import Action from "../../ace/Action";
import SwitchLanguageCommand from "../../../src/common/commands/SwitchLanguageCommand";

export default class AbstractSwitchLanguageAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'common.SwitchLanguageAction', false);
    }

	getCommand() {
			return new SwitchLanguageCommand(this.actionData);
	}

	
    preUpdateUI() {
    }

    postUpdateUI() {
    }

}

/*       S.D.G.       */
