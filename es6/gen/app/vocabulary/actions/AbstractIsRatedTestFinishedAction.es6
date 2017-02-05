'use strict';

class AbstractIsRatedTestFinishedAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'IsRatedTestFinishedAction');
    }

	getCommand() {
		return new IsRatedTestFinishedCommand(this.actionData);
	}

}

/*       S.D.G.       */
