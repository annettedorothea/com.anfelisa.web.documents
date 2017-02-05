'use strict';

class AbstractOpenChangePasswordAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'OpenChangePasswordAction');
    }

	getCommand() {
		return new OpenChangePasswordCommand(this.actionData);
	}

}

/*       S.D.G.       */
