'use strict';

class AbstractCheckIfComplexCardIsFinishedAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'CheckIfComplexCardIsFinishedAction', false);
    }

	getCommand() {
		return new CheckIfComplexCardIsFinishedCommand(this.actionData);
	}

}

/*       S.D.G.       */
