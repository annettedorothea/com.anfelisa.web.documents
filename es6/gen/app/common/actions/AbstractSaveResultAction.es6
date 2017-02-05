'use strict';

class AbstractSaveResultAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'SaveResultAction');
    }

	getCommand() {
		return new SaveResultCommand(this.actionData);
	}

}

/*       S.D.G.       */
