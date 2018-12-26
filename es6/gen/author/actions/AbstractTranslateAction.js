import Action from "../../ace/SynchronousAction";
import TranslateCommand from "../../../src/author/commands/TranslateCommand";
import CategoriesView from "../../../src/author/views/CategoriesView";

export default class AbstractTranslateAction extends Action {

    constructor(actionData) {
        super(actionData, 'author.TranslateAction');
    }

	getCommand() {
		return new TranslateCommand(this.actionData);
	}


}

/*       S.D.G.       */
