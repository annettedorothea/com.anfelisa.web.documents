'use strict';

class AbstractValidateRequiredFieldAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'ValidateRequiredFieldAction', false);
    }

	getCommand() {
		return new ValidateRequiredFieldCommand(this.actionData);
	}

}

/*       S.D.G.       */
