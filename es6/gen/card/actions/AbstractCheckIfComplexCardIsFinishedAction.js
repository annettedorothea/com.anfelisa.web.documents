import Action from "../../ace/Action";
import CheckIfComplexCardIsFinishedCommand from "../../../src/card/commands/CheckIfComplexCardIsFinishedCommand";

export default class AbstractCheckIfComplexCardIsFinishedAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'card.CheckIfComplexCardIsFinishedAction', false);
    }

	getCommand() {
			return new CheckIfComplexCardIsFinishedCommand(this.actionData);
	}

	
    preUpdateUI() {
    }

    postUpdateUI() {
    }

}

/*       S.D.G.       */
