'use strict';

class AbstractShowFalseMultipleChoiceAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'ShowFalseMultipleChoiceAction');
    }

	getCommand() {
		return new ShowFalseMultipleChoiceCommand(this.actionData);
	}

}

/*       S.D.G.       */
