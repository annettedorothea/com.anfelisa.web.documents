import Action from "../../ace/Action";
import ReadBoxesCommand from "../../../src/navigation/commands/ReadBoxesCommand";

export default class AbstractReadBoxesAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'navigation.ReadBoxesAction', false);
    }

	getCommand() {
		return new ReadBoxesCommand(this.actionData);
	}

	preUpdateUI() {
	}

	postUpdateUI() {
	}

}

/*       S.D.G.       */
