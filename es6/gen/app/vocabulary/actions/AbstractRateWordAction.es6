'use strict';

class AbstractRateWordAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'RateWordAction', false);
    }

	getCommand() {
		return new RateWordCommand(this.actionData);
	}

}

/*       S.D.G.       */
