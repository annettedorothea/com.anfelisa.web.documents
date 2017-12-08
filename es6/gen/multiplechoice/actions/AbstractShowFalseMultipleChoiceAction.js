import Action from "../../ace/Action";
import ShowFalseMultipleChoiceCommand from "../../../src/multiplechoice/commands/ShowFalseMultipleChoiceCommand";

export default class AbstractShowFalseMultipleChoiceAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'multiplechoice.ShowFalseMultipleChoiceAction', false);
    }

	getCommand() {
			return new ShowFalseMultipleChoiceCommand(this.actionData);
	}

	
    preUpdateUI() {
    }

    postUpdateUI() {
    }

}

/*       S.D.G.       */
