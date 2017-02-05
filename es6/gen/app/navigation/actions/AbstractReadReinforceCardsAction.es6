'use strict';

class AbstractReadReinforceCardsAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'ReadReinforceCardsAction');
    }

	getCommand() {
		return new ReadReinforceCardsCommand(this.actionData);
	}

}

/*       S.D.G.       */
