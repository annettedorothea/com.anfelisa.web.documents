'use strict';

class AbstractShowWordAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'ShowWordAction');
    }

	getCommand() {
		return new ShowWordCommand(this.actionData);
	}

}

/*       S.D.G.       */
