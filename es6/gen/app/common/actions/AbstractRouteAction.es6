'use strict';

class AbstractRouteAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'RouteAction');
    }

	getCommand() {
		return new RouteCommand(this.actionData);
	}

}

/*       S.D.G.       */
