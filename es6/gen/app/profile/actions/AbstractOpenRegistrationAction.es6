'use strict';

class AbstractOpenRegistrationAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'OpenRegistrationAction', false);
    }

	getCommand() {
		return new OpenRegistrationCommand(this.actionData);
	}

}

/*       S.D.G.       */
