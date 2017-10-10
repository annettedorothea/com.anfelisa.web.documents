'use strict';

class AbstractCorrectWordAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'CorrectWordAction', false);
    }

	getCommand() {
		return new CorrectWordCommand(this.actionData);
	}

}

/*       S.D.G.       */
