'use strict';

class AbstractDisplayNextQuestionAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'DisplayNextQuestionAction', false);
    }

	getCommand() {
		return new DisplayNextQuestionCommand(this.actionData);
	}

}

/*       S.D.G.       */
