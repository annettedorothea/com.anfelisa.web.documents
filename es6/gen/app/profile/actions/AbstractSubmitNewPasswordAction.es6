'use strict';

class AbstractSubmitNewPasswordAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'SubmitNewPasswordAction', false);
    }

	getCommand() {
		return new SubmitNewPasswordCommand(this.actionData);
	}

}

/*       S.D.G.       */
