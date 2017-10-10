'use strict';

class AbstractOpenReallyDeleteDialogAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'OpenReallyDeleteDialogAction', false);
    }

	getCommand() {
		return new OpenReallyDeleteDialogCommand(this.actionData);
	}

}

/*       S.D.G.       */
