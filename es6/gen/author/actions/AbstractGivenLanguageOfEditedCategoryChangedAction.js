import Action from "../../ace/SynchronousAction";
import GivenLanguageOfEditedCategoryChangedCommand from "../../../src/author/commands/GivenLanguageOfEditedCategoryChangedCommand";

export default class AbstractGivenLanguageOfEditedCategoryChangedAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'author.GivenLanguageOfEditedCategoryChangedAction', false);
    }

	getCommand() {
		return new GivenLanguageOfEditedCategoryChangedCommand(this.actionData);
	}


}

/*       S.D.G.       */
