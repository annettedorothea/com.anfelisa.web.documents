import Action from "../../ace/AsynchronousAction";
import ScoreReinforceCardCommand from "../../../src/box/commands/ScoreReinforceCardCommand";

export default class AbstractScoreReinforceCardAction extends Action {

    constructor(actionData) {
        super(actionData, 'box.ScoreReinforceCardAction', false);
		this.postUpdateUI = this.postUpdateUI.bind(this);
    }

	getCommand() {
		return new ScoreReinforceCardCommand(this.actionData);
	}

		preUpdateUI() {
		}
	
		postUpdateUI() {
		}

}

/*       S.D.G.       */
