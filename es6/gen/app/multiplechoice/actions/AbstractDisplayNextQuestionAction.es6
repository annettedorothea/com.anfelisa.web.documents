'use strict';

class AbstractDisplayNextQuestionAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'DisplayNextQuestionAction');
    }

	getCommand() {
		return new DisplayNextQuestionCommand(this.actionData);
	}

}

/*       S.D.G.       */
