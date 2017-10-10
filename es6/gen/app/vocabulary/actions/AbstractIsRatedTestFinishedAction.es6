'use strict';

class AbstractIsRatedTestFinishedAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'IsRatedTestFinishedAction', false);
    }

	getCommand() {
		return new IsRatedTestFinishedCommand(this.actionData);
	}

}

/*       S.D.G.       */
