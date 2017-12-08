import Action from "../../ace/Action";
import ShowWordCommand from "../../../src/vocabulary/commands/ShowWordCommand";

export default class AbstractShowWordAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'vocabulary.ShowWordAction', false);
    }

	getCommand() {
			return new ShowWordCommand(this.actionData);
	}

	
    preUpdateUI() {
    }

    postUpdateUI() {
    }

}

/*       S.D.G.       */
