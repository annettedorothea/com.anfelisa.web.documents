import Action from "../../ace/AsynchronousAction";
import ScoreCardCommand from "../../../src/box/commands/ScoreCardCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractScoreCardAction extends Action {

    constructor( scoredCardQuality) {
        super({scoredCardQuality}, 'box.ScoreCardAction');
		this.postCall = this.postCall.bind(this);
    }
    
	getCommand() {
		return new ScoreCardCommand(this.actionData);
	}

	preCall() {
		CommonView.displaySpinner(this.actionData);
	}
	
	postCall() {
		CommonView.hideSpinner(this.actionData);
	}

}

/*       S.D.G.       */
