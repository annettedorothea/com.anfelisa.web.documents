'use strict';

class AbstractScoreCardAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'ScoreCardAction');
    }

	getCommand() {
		return new ScoreCardCommand(this.actionData);
	}

}

/*       S.D.G.       */
