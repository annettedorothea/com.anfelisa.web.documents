'use strict';

class AbstractSubmitForgotPasswordRequestAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'SubmitForgotPasswordRequestAction');
    }

	getCommand() {
		return new SubmitForgotPasswordRequestCommand(this.actionData);
	}

}

/*       S.D.G.       */
