'use strict';

class AbstractRecalculateScheduledCardsAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'RecalculateScheduledCardsAction', false);
    }

	getCommand() {
		return new RecalculateScheduledCardsCommand(this.actionData);
	}

}

/*       S.D.G.       */
