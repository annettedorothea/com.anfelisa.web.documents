import Action from "../../ace/AsynchronousAction";
import ScoreReinforceCardCommand from "../../../src/box/commands/ScoreReinforceCardCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractScoreReinforceCardAction extends Action {

    constructor( quality) {
        super({quality}, 'box.ScoreReinforceCardAction');
		this.postCall = this.postCall.bind(this);
    }
    
	getCommand() {
		return new ScoreReinforceCardCommand(this.actionData);
	}

	preCall() {
		CommonView.displaySpinner(this.actionData);
	}
	
	postCall() {
		CommonView.hideSpinner(this.actionData);
	}

}

/*       S.D.G.       */
