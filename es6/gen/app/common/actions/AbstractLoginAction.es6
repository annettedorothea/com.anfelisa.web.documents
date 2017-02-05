'use strict';

class AbstractLoginAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'LoginAction');
    }

	getCommand() {
		return new LoginCommand(this.actionData);
	}

}

/*       S.D.G.       */
