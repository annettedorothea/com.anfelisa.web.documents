'use strict';

class AbstractReadPublicLessonsAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'ReadPublicLessonsAction', false);
    }

	getCommand() {
		return new ReadPublicLessonsCommand(this.actionData);
	}

}

/*       S.D.G.       */
