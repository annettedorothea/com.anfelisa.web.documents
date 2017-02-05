'use strict';

class AbstractReadPrivateTestsAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'ReadPrivateTestsAction');
    }

	getCommand() {
		return new ReadPrivateTestsCommand(this.actionData);
	}

}

/*       S.D.G.       */
