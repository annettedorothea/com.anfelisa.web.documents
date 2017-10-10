'use strict';

class AbstractReadResultAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'ReadResultAction', false);
    }

	getCommand() {
		return new ReadResultCommand(this.actionData);
	}

}

/*       S.D.G.       */
