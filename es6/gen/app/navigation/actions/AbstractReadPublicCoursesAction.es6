'use strict';

class AbstractReadPublicCoursesAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'ReadPublicCoursesAction', false);
    }

	getCommand() {
		return new ReadPublicCoursesCommand(this.actionData);
	}

}

/*       S.D.G.       */
