import Action from "../../ace/SynchronousAction";
import WantedLanguageOfNewCategoryChangedCommand from "../../../src/author/commands/WantedLanguageOfNewCategoryChangedCommand";

export default class AbstractWantedLanguageOfNewCategoryChangedAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'author.WantedLanguageOfNewCategoryChangedAction', false);
    }

	getCommand() {
		return new WantedLanguageOfNewCategoryChangedCommand(this.actionData);
	}


}

/*       S.D.G.       */
