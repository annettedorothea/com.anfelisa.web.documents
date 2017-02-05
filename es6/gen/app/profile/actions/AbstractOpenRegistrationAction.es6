'use strict';

class AbstractOpenRegistrationAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'OpenRegistrationAction');
    }

	getCommand() {
		return new OpenRegistrationCommand(this.actionData);
	}

}

/*       S.D.G.       */
