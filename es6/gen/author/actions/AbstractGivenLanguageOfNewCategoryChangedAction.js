import Action from "../../ace/SynchronousAction";
import GivenLanguageOfNewCategoryChangedCommand from "../../../src/author/commands/GivenLanguageOfNewCategoryChangedCommand";

export default class AbstractGivenLanguageOfNewCategoryChangedAction extends Action {

    constructor() {
        super({}, 'author.GivenLanguageOfNewCategoryChangedAction');
    }
    
	getCommand() {
		return new GivenLanguageOfNewCategoryChangedCommand(this.actionData);
	}


}

/*       S.D.G.       */
