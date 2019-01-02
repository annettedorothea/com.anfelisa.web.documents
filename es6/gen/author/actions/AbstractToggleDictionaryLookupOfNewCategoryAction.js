import Action from "../../ace/SynchronousAction";
import ToggleDictionaryLookupOfNewCategoryCommand from "../../../src/author/commands/ToggleDictionaryLookupOfNewCategoryCommand";

export default class AbstractToggleDictionaryLookupOfNewCategoryAction extends Action {

    constructor() {
        super({}, 'author.ToggleDictionaryLookupOfNewCategoryAction');
    }
    
	getCommand() {
		return new ToggleDictionaryLookupOfNewCategoryCommand(this.actionData);
	}


}

/*       S.D.G.       */
