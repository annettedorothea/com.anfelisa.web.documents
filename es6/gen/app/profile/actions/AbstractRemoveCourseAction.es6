'use strict';

class AbstractRemoveCourseAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'RemoveCourseAction');
    }

	getCommand() {
		return new RemoveCourseCommand(this.actionData);
	}

}

/*       S.D.G.       */
