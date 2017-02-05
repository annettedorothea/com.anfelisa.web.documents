'use strict';

class AbstractCheckUsernameAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'CheckUsernameAction');
    }

	getCommand() {
		return new CheckUsernameCommand(this.actionData);
	}

}

/*       S.D.G.       */
