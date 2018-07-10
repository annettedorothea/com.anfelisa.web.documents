import Action from "../../ace/AsynchronousAction";
import ScoreReinforceCardCommand from "../../../src/box/commands/ScoreReinforceCardCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractScoreReinforceCardAction extends Action {

    constructor(actionData) {
        super(actionData, 'box.ScoreReinforceCardAction');
		this.postUpdateUI = this.postUpdateUI.bind(this);
    }

	getCommand() {
		return new ScoreReinforceCardCommand(this.actionData);
	}

		preUpdateUI() {
			CommonView.displaySpinner(this.actionData);
		}
	
		postUpdateUI() {
			CommonView.hideSpinner(this.actionData);
		}

}

/*       S.D.G.       */
