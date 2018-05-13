import Action from "../../ace/SynchronousAction";
import ToggleDictionaryLookupOfNewCategoryCommand from "../../../src/author/commands/ToggleDictionaryLookupOfNewCategoryCommand";

export default class AbstractToggleDictionaryLookupOfNewCategoryAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'author.ToggleDictionaryLookupOfNewCategoryAction', false);
    }

	getCommand() {
		return new ToggleDictionaryLookupOfNewCategoryCommand(this.actionData);
	}


}

/*       S.D.G.       */
