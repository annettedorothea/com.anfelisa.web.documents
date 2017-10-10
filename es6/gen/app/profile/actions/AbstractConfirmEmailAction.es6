'use strict';

class AbstractConfirmEmailAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'ConfirmEmailAction', false);
    }

	getCommand() {
		return new ConfirmEmailCommand(this.actionData);
	}

}

/*       S.D.G.       */
