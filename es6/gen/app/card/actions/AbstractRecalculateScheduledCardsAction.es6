'use strict';

class AbstractRecalculateScheduledCardsAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'RecalculateScheduledCardsAction');
    }

	getCommand() {
		return new RecalculateScheduledCardsCommand(this.actionData);
	}

}

/*       S.D.G.       */
