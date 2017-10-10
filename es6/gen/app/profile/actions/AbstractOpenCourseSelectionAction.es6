'use strict';

class AbstractOpenCourseSelectionAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'OpenCourseSelectionAction', false);
    }

	getCommand() {
		return new OpenCourseSelectionCommand(this.actionData);
	}

}

/*       S.D.G.       */
