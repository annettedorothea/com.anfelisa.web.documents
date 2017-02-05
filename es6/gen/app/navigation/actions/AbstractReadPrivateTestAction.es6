'use strict';

class AbstractReadPrivateTestAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'ReadPrivateTestAction');
    }

	getCommand() {
		return new ReadPrivateTestCommand(this.actionData);
	}

}

/*       S.D.G.       */
