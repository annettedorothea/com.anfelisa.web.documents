import Action from "../../ace/SynchronousAction";
import WantedLanguageOfNewCategoryChangedCommand from "../../../src/author/commands/WantedLanguageOfNewCategoryChangedCommand";

export default class AbstractWantedLanguageOfNewCategoryChangedAction extends Action {

    constructor(actionData) {
        super(actionData, 'author.WantedLanguageOfNewCategoryChangedAction', false, false);
    }

	getCommand() {
		return new WantedLanguageOfNewCategoryChangedCommand(this.actionData);
	}


}

/*       S.D.G.       */
