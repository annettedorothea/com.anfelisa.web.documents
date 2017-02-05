'use strict';

class AbstractScoreReinforcedCardAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'ScoreReinforcedCardAction');
    }

	getCommand() {
		return new ScoreReinforcedCardCommand(this.actionData);
	}

}

/*       S.D.G.       */
