'use strict';

class AbstractSaveResultAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'SaveResultAction', false);
    }

	getCommand() {
		return new SaveResultCommand(this.actionData);
	}

}

/*       S.D.G.       */
