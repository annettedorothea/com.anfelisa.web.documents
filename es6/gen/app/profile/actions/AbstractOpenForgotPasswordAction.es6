'use strict';

class AbstractOpenForgotPasswordAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'OpenForgotPasswordAction');
    }

	getCommand() {
		return new OpenForgotPasswordCommand(this.actionData);
	}

}

/*       S.D.G.       */
