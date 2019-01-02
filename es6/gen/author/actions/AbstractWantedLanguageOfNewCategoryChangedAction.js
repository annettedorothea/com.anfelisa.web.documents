import Action from "../../ace/SynchronousAction";
import WantedLanguageOfNewCategoryChangedCommand from "../../../src/author/commands/WantedLanguageOfNewCategoryChangedCommand";

export default class AbstractWantedLanguageOfNewCategoryChangedAction extends Action {

    constructor() {
        super({}, 'author.WantedLanguageOfNewCategoryChangedAction');
    }
    
	getCommand() {
		return new WantedLanguageOfNewCategoryChangedCommand(this.actionData);
	}


}

/*       S.D.G.       */
