import Action from "../../ace/Action";
import ValidateRequiredFieldCommand from "../../../src/common/commands/ValidateRequiredFieldCommand";

export default class AbstractValidateRequiredFieldAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'common.ValidateRequiredFieldAction', false);
    }

	getCommand() {
			return new ValidateRequiredFieldCommand(this.actionData);
	}

	
    preUpdateUI() {
    }

    postUpdateUI() {
    }

}

/*       S.D.G.       */
