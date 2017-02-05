'use strict';

class AbstractStartTestAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'StartTestAction');
    }

	getCommand() {
		return new StartTestCommand(this.actionData);
	}

}

/*       S.D.G.       */
