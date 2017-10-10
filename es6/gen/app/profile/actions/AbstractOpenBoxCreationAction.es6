'use strict';

class AbstractOpenBoxCreationAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'OpenBoxCreationAction', false);
    }

	getCommand() {
		return new OpenBoxCreationCommand(this.actionData);
	}

}

/*       S.D.G.       */
