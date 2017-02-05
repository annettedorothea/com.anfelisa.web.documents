'use strict';

class AbstractLoadCoursesAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'LoadCoursesAction');
    }

	getCommand() {
		return new LoadCoursesCommand(this.actionData);
	}

}

/*       S.D.G.       */
