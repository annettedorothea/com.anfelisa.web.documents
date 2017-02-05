'use strict';

class AbstractConfirmEmailAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'ConfirmEmailAction');
    }

	getCommand() {
		return new ConfirmEmailCommand(this.actionData);
	}

}

/*       S.D.G.       */
