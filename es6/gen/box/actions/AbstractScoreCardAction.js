import Action from "../../ace/AsynchronousAction";
import ScoreCardCommand from "../../../src/box/commands/ScoreCardCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractScoreCardAction extends Action {

    constructor(actionData) {
        super(actionData, 'box.ScoreCardAction', false, false);
		this.postUpdateUI = this.postUpdateUI.bind(this);
    }

	getCommand() {
		return new ScoreCardCommand(this.actionData);
	}

		preUpdateUI() {
			CommonView.displaySpinner(this.actionData);
		}
	
		postUpdateUI() {
			CommonView.hideSpinner(this.actionData);
		}

}

/*       S.D.G.       */
