'use strict';

class AbstractLogoutAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'LogoutAction', false);
    }

	getCommand() {
		return new LogoutCommand(this.actionData);
	}

}

/*       S.D.G.       */
