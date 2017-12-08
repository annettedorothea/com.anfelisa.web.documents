import Action from "../../ace/Action";
import ReadNextCardCommand from "../../../src/navigation/commands/ReadNextCardCommand";

export default class AbstractReadNextCardAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'navigation.ReadNextCardAction', false);
    }

	getCommand() {
			return new ReadNextCardCommand(this.actionData);
	}

	
    preUpdateUI() {
    }

    postUpdateUI() {
    }

}

/*       S.D.G.       */
