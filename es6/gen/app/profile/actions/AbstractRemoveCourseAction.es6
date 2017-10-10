'use strict';

class AbstractRemoveCourseAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'RemoveCourseAction', false);
    }

	getCommand() {
		return new RemoveCourseCommand(this.actionData);
	}

}

/*       S.D.G.       */
