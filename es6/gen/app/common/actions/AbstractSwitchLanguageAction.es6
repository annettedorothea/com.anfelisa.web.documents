'use strict';

class AbstractSwitchLanguageAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'SwitchLanguageAction');
    }

	getCommand() {
		return new SwitchLanguageCommand(this.actionData);
	}

}

/*       S.D.G.       */
