'use strict';

class AbstractLoadCoursesAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'LoadCoursesAction', false);
    }

	getCommand() {
		return new LoadCoursesCommand(this.actionData);
	}

}

/*       S.D.G.       */
