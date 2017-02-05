'use strict';

class AbstractReadPublicCoursesAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'ReadPublicCoursesAction');
    }

	getCommand() {
		return new ReadPublicCoursesCommand(this.actionData);
	}

}

/*       S.D.G.       */
