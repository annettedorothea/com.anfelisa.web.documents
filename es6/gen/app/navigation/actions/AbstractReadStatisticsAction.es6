'use strict';

class AbstractReadStatisticsAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'ReadStatisticsAction');
    }

	getCommand() {
		return new ReadStatisticsCommand(this.actionData);
	}

}

/*       S.D.G.       */
