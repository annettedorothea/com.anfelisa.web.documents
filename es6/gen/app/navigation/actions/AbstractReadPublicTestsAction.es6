'use strict';

class AbstractReadPublicTestsAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'ReadPublicTestsAction', false);
    }

	getCommand() {
		return new ReadPublicTestsCommand(this.actionData);
	}

}

/*       S.D.G.       */
