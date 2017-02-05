'use strict';

class AbstractValidatePasswordAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'ValidatePasswordAction');
    }

	getCommand() {
		return new ValidatePasswordCommand(this.actionData);
	}

}

/*       S.D.G.       */
