'use strict';

class AbstractLoadBoxAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'LoadBoxAction', false);
    }

	getCommand() {
		return new LoadBoxCommand(this.actionData);
	}

}

/*       S.D.G.       */
