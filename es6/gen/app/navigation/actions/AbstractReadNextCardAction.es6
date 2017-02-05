'use strict';

class AbstractReadNextCardAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'ReadNextCardAction');
    }

	getCommand() {
		return new ReadNextCardCommand(this.actionData);
	}

}

/*       S.D.G.       */
