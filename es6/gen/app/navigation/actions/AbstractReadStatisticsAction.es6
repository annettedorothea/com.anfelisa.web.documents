'use strict';

class AbstractReadStatisticsAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'ReadStatisticsAction', false);
    }

	getCommand() {
		return new ReadStatisticsCommand(this.actionData);
	}

}

/*       S.D.G.       */
