'use strict';

class AbstractReadPrivateLessonsAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'ReadPrivateLessonsAction', false);
    }

	getCommand() {
		return new ReadPrivateLessonsCommand(this.actionData);
	}

}

/*       S.D.G.       */
