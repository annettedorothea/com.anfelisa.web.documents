import Action from "../../ace/SynchronousAction";
import ScoreCardCommand from "../../../src/box/commands/ScoreCardCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractScoreCardAction extends Action {

    constructor(actionData) {
        super(actionData, 'box.ScoreCardAction');
    }

	getCommand() {
		return new ScoreCardCommand(this.actionData);
	}


}

/*       S.D.G.       */
