'use strict';

class AbstractReadNextCardAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'ReadNextCardAction', false);
    }

	getCommand() {
		return new ReadNextCardCommand(this.actionData);
	}

}

/*       S.D.G.       */
