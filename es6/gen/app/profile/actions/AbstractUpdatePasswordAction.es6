'use strict';

class AbstractUpdatePasswordAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'UpdatePasswordAction');
    }

	getCommand() {
		return new UpdatePasswordCommand(this.actionData);
	}

}

/*       S.D.G.       */
