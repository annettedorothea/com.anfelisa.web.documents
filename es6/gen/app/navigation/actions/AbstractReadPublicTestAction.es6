'use strict';

class AbstractReadPublicTestAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'ReadPublicTestAction', false);
    }

	getCommand() {
		return new ReadPublicTestCommand(this.actionData);
	}

}

/*       S.D.G.       */
