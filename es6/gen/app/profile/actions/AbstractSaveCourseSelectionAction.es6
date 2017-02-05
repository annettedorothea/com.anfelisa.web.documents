'use strict';

class AbstractSaveCourseSelectionAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'SaveCourseSelectionAction');
    }

	getCommand() {
		return new SaveCourseSelectionCommand(this.actionData);
	}

}

/*       S.D.G.       */
