'use strict';

class AbstractIsTestFinishedAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'IsTestFinishedAction');
    }

	getCommand() {
		return new IsTestFinishedCommand(this.actionData);
	}

}

/*       S.D.G.       */
