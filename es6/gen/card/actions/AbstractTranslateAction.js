import Action from "../../ace/AsynchronousAction";
import TranslateCommand from "../../../src/card/commands/TranslateCommand";
import CardListView from "../../../src/card/views/CardListView";

export default class AbstractTranslateAction extends Action {

    constructor() {
        super({}, 'card.TranslateAction');
		this.postCall = this.postCall.bind(this);
    }
    
	getCommand() {
		return new TranslateCommand(this.actionData);
	}

	preCall() {
		CardListView.displayTranslateSpinner(this.actionData);
	}
	
	postCall() {
		CardListView.hideTranslateSpinner(this.actionData);
	}

}

/*       S.D.G.       */
