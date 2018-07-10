import Action from "../../ace/SynchronousAction";
import FilterCardsCommand from "../../../src/author/commands/FilterCardsCommand";

export default class AbstractFilterCardsAction extends Action {

    constructor(actionData) {
        super(actionData, 'author.FilterCardsAction');
    }

	getCommand() {
		return new FilterCardsCommand(this.actionData);
	}


}

/*       S.D.G.       */
