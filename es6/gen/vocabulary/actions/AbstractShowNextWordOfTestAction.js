import Action from "../../ace/Action";
import ShowNextWordOfTestCommand from "../../../src/vocabulary/commands/ShowNextWordOfTestCommand";

export default class AbstractShowNextWordOfTestAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'vocabulary.ShowNextWordOfTestAction', false);
    }

	getCommand() {
			return new ShowNextWordOfTestCommand(this.actionData);
	}

	
    preUpdateUI() {
    }

    postUpdateUI() {
    }

}

/*       S.D.G.       */
