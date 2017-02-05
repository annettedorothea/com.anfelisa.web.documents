'use strict';

class AbstractSaveBoxConfigAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'SaveBoxConfigAction');
    }

	getCommand() {
		return new SaveBoxConfigCommand(this.actionData);
	}

}

/*       S.D.G.       */
