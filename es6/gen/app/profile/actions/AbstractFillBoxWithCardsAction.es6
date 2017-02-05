'use strict';

class AbstractFillBoxWithCardsAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'FillBoxWithCardsAction');
    }

	getCommand() {
		return new FillBoxWithCardsCommand(this.actionData);
	}

}

/*       S.D.G.       */
