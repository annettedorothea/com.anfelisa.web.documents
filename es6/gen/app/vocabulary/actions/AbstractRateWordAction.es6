'use strict';

class AbstractRateWordAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'RateWordAction');
    }

	getCommand() {
		return new RateWordCommand(this.actionData);
	}

}

/*       S.D.G.       */
