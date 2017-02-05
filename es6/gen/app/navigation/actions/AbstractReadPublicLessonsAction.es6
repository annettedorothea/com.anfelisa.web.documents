'use strict';

class AbstractReadPublicLessonsAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'ReadPublicLessonsAction');
    }

	getCommand() {
		return new ReadPublicLessonsCommand(this.actionData);
	}

}

/*       S.D.G.       */
