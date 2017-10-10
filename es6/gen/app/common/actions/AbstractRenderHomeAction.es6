'use strict';

class AbstractRenderHomeAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'RenderHomeAction', false);
    }

	getCommand() {
		return new RenderHomeCommand(this.actionData);
	}

}

/*       S.D.G.       */
