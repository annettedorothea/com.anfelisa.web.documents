import Action from "../../ace/SynchronousAction";
import ScoreReinforceCardCommand from "../../../src/box/commands/ScoreReinforceCardCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractScoreReinforceCardAction extends Action {

    constructor(actionData) {
        super(actionData, 'box.ScoreReinforceCardAction');
    }

	getCommand() {
		return new ScoreReinforceCardCommand(this.actionData);
	}


}

/*       S.D.G.       */
