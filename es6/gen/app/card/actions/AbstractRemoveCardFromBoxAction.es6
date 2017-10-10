'use strict';

class AbstractRemoveCardFromBoxAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'RemoveCardFromBoxAction', false);
    }

	getCommand() {
		return new RemoveCardFromBoxCommand(this.actionData);
	}

}

/*       S.D.G.       */
