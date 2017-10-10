'use strict';

class AbstractDeleteBoxAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'DeleteBoxAction', false);
    }

	getCommand() {
		return new DeleteBoxCommand(this.actionData);
	}

}

/*       S.D.G.       */
