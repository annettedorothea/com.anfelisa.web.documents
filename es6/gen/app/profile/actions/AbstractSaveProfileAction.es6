'use strict';

class AbstractSaveProfileAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'SaveProfileAction');
    }

	getCommand() {
		return new SaveProfileCommand(this.actionData);
	}

}

/*       S.D.G.       */
