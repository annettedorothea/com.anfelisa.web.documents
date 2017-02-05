'use strict';

class AbstractRenderLogoutAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'RenderLogoutAction');
    }

	getCommand() {
		return new RenderLogoutCommand(this.actionData);
	}

}

/*       S.D.G.       */
