'use strict';

class AbstractShowCorrectMultipleChoiceAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'ShowCorrectMultipleChoiceAction');
    }

	getCommand() {
		return new ShowCorrectMultipleChoiceCommand(this.actionData);
	}

}

/*       S.D.G.       */
