'use strict';

class AbstractRepeatComplexCardAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'RepeatComplexCardAction');
    }

	getCommand() {
		return new RepeatComplexCardCommand(this.actionData);
	}

}

/*       S.D.G.       */
