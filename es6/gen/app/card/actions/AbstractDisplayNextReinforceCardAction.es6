'use strict';

class AbstractDisplayNextReinforceCardAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'DisplayNextReinforceCardAction', false);
    }

	getCommand() {
		return new DisplayNextReinforceCardCommand(this.actionData);
	}

}

/*       S.D.G.       */
