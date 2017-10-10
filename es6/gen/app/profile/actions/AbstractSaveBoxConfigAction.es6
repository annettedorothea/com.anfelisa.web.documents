'use strict';

class AbstractSaveBoxConfigAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'SaveBoxConfigAction', false);
    }

	getCommand() {
		return new SaveBoxConfigCommand(this.actionData);
	}

}

/*       S.D.G.       */
