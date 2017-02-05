'use strict';

class AbstractOpenProfileAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'OpenProfileAction');
    }

	getCommand() {
		return new OpenProfileCommand(this.actionData);
	}

}

/*       S.D.G.       */
