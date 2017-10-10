'use strict';

class AbstractValidatePasswordAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'ValidatePasswordAction', false);
    }

	getCommand() {
		return new ValidatePasswordCommand(this.actionData);
	}

}

/*       S.D.G.       */
