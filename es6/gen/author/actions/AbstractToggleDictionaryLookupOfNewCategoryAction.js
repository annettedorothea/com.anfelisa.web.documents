import Action from "../../ace/SynchronousAction";
import ToggleDictionaryLookupOfNewCategoryCommand from "../../../src/author/commands/ToggleDictionaryLookupOfNewCategoryCommand";

export default class AbstractToggleDictionaryLookupOfNewCategoryAction extends Action {

    constructor(actionData) {
        super(actionData, 'author.ToggleDictionaryLookupOfNewCategoryAction', false, false);
    }

	getCommand() {
		return new ToggleDictionaryLookupOfNewCategoryCommand(this.actionData);
	}


}

/*       S.D.G.       */
