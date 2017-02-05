'use strict';

class AbstractReadPrivateCoursesAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'ReadPrivateCoursesAction');
    }

	getCommand() {
		return new ReadPrivateCoursesCommand(this.actionData);
	}

}

/*       S.D.G.       */
