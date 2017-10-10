'use strict';

class AbstractRenderLoginAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'RenderLoginAction', false);
    }

	getCommand() {
		return new RenderLoginCommand(this.actionData);
	}

}

/*       S.D.G.       */
