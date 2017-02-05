'use strict';

class AbstractShowNextWordOfTestAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'ShowNextWordOfTestAction');
    }

	getCommand() {
		return new ShowNextWordOfTestCommand(this.actionData);
	}

}

/*       S.D.G.       */
