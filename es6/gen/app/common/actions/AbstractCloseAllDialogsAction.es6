'use strict';

class AbstractCloseAllDialogsAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'CloseAllDialogsAction');
    }

	getCommand() {
		return new CloseAllDialogsCommand(this.actionData);
	}

}

/*       S.D.G.       */
