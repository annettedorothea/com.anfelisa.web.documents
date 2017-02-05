'use strict';

class AbstractDeleteBoxAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'DeleteBoxAction');
    }

	getCommand() {
		return new DeleteBoxCommand(this.actionData);
	}

}

/*       S.D.G.       */
