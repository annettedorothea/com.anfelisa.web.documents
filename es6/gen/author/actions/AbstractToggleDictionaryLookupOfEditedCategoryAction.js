import Action from "../../ace/SynchronousAction";
import ToggleDictionaryLookupOfEditedCategoryCommand from "../../../src/author/commands/ToggleDictionaryLookupOfEditedCategoryCommand";

export default class AbstractToggleDictionaryLookupOfEditedCategoryAction extends Action {

    constructor() {
        super({}, 'author.ToggleDictionaryLookupOfEditedCategoryAction');
    }
    
	getCommand() {
		return new ToggleDictionaryLookupOfEditedCategoryCommand(this.actionData);
	}


}

/*       S.D.G.       */
