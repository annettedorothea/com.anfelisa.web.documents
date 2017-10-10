'use strict';

class AbstractSwitchLanguageAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'SwitchLanguageAction', false);
    }

	getCommand() {
		return new SwitchLanguageCommand(this.actionData);
	}

}

/*       S.D.G.       */
