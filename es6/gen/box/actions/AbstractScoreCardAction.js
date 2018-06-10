import Action from "../../ace/AsynchronousAction";
import ScoreCardCommand from "../../../src/box/commands/ScoreCardCommand";

export default class AbstractScoreCardAction extends Action {

    constructor(actionData) {
        super(actionData, 'box.ScoreCardAction', false);
		this.postUpdateUI = this.postUpdateUI.bind(this);
    }

	getCommand() {
		return new ScoreCardCommand(this.actionData);
	}

		preUpdateUI() {
		}
	
		postUpdateUI() {
		}

}

/*       S.D.G.       */
