'use strict';

class AbstractReadPublicTestAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'ReadPublicTestAction');
    }

	getCommand() {
		return new ReadPublicTestCommand(this.actionData);
	}

}

/*       S.D.G.       */
