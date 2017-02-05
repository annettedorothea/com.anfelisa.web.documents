'use strict';

class AbstractOpenNewPasswordAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'OpenNewPasswordAction');
    }

	getCommand() {
		return new OpenNewPasswordCommand(this.actionData);
	}

}

/*       S.D.G.       */
