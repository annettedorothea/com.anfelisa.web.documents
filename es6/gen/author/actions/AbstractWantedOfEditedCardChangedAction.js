import Action from "../../ace/SynchronousAction";
import WantedOfEditedCardChangedCommand from "../../../src/author/commands/WantedOfEditedCardChangedCommand";

export default class AbstractWantedOfEditedCardChangedAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'author.WantedOfEditedCardChangedAction', false);
    }

	getCommand() {
		return new WantedOfEditedCardChangedCommand(this.actionData);
	}


}

/*       S.D.G.       */
