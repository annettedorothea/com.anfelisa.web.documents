'use strict';

class AbstractSubmitRegistrationAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'SubmitRegistrationAction');
    }

	getCommand() {
		return new SubmitRegistrationCommand(this.actionData);
	}

}

/*       S.D.G.       */
