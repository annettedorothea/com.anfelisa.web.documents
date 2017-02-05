'use strict';

class AbstractValidateRequiredFieldAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'ValidateRequiredFieldAction');
    }

	getCommand() {
		return new ValidateRequiredFieldCommand(this.actionData);
	}

}

/*       S.D.G.       */
