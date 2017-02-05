'use strict';

class AbstractReadBoxesAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'ReadBoxesAction');
    }

	getCommand() {
		return new ReadBoxesCommand(this.actionData);
	}

}

/*       S.D.G.       */
