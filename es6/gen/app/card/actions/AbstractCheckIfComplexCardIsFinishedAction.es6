'use strict';

class AbstractCheckIfComplexCardIsFinishedAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'CheckIfComplexCardIsFinishedAction');
    }

	getCommand() {
		return new CheckIfComplexCardIsFinishedCommand(this.actionData);
	}

}

/*       S.D.G.       */
