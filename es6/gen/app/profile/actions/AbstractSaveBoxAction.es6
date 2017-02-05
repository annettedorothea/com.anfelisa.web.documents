'use strict';

class AbstractSaveBoxAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'SaveBoxAction');
    }

	getCommand() {
		return new SaveBoxCommand(this.actionData);
	}

}

/*       S.D.G.       */
