import Action from "../../ace/SynchronousAction";
import WantedOfEditedCardChangedCommand from "../../../src/author/commands/WantedOfEditedCardChangedCommand";

export default class AbstractWantedOfEditedCardChangedAction extends Action {

    constructor(actionData) {
        super(actionData, 'author.WantedOfEditedCardChangedAction', false);
    }

	getCommand() {
		return new WantedOfEditedCardChangedCommand(this.actionData);
	}


}

/*       S.D.G.       */
