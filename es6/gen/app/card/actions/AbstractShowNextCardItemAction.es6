'use strict';

class AbstractShowNextCardItemAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'ShowNextCardItemAction');
    }

	getCommand() {
		return new ShowNextCardItemCommand(this.actionData);
	}

}

/*       S.D.G.       */
