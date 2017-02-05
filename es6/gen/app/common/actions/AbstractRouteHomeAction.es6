'use strict';

class AbstractRouteHomeAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'RouteHomeAction');
    }

	getCommand() {
		return new RouteCommand(this.actionData);
	}

}

/*       S.D.G.       */
