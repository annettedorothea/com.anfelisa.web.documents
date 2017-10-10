'use strict';

class AbstractShowWordAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'ShowWordAction', false);
    }

	getCommand() {
		return new ShowWordCommand(this.actionData);
	}

}

/*       S.D.G.       */
