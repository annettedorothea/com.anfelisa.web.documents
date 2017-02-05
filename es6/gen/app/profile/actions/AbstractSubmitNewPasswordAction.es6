'use strict';

class AbstractSubmitNewPasswordAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'SubmitNewPasswordAction');
    }

	getCommand() {
		return new SubmitNewPasswordCommand(this.actionData);
	}

}

/*       S.D.G.       */
