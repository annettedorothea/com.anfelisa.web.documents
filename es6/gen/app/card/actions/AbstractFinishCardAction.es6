'use strict';

class AbstractFinishCardAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'FinishCardAction');
    }

	getCommand() {
		return new FinishCardCommand(this.actionData);
	}

}

/*       S.D.G.       */
