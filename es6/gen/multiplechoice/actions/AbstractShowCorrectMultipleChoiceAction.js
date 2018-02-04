import Action from "../../ace/Action";
import ShowCorrectMultipleChoiceCommand from "../../../src/multiplechoice/commands/ShowCorrectMultipleChoiceCommand";

export default class AbstractShowCorrectMultipleChoiceAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'multiplechoice.ShowCorrectMultipleChoiceAction', false);
    }

	getCommand() {
		return new ShowCorrectMultipleChoiceCommand(this.actionData);
	}

	preUpdateUI() {
	}

	postUpdateUI() {
	}

}

/*       S.D.G.       */
