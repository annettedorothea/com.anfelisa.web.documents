'use strict';

class AbstractUpdatePasswordAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'UpdatePasswordAction', false);
    }

	getCommand() {
		return new UpdatePasswordCommand(this.actionData);
	}

}

/*       S.D.G.       */
