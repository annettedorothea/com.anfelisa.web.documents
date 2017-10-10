'use strict';

class AbstractReadBoxesAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'ReadBoxesAction', false);
    }

	getCommand() {
		return new ReadBoxesCommand(this.actionData);
	}

}

/*       S.D.G.       */
