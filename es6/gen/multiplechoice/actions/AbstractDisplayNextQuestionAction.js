import Action from "../../ace/Action";
import DisplayNextQuestionCommand from "../../../src/multiplechoice/commands/DisplayNextQuestionCommand";

export default class AbstractDisplayNextQuestionAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'multiplechoice.DisplayNextQuestionAction', false);
    }

	getCommand() {
		return new DisplayNextQuestionCommand(this.actionData);
	}

	preUpdateUI() {
	}

	postUpdateUI() {
	}

}

/*       S.D.G.       */
